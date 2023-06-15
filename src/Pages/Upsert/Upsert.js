import {Button, Flex, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Upsert = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const AddCredentialLogic = useCallback(async (data) => {
    try {
      const response = await fetch('http://localhost:3003/credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const HandleGetDetailCredential = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3003/credentials/${id}`);
      const data = await response.json();

      setName(data?.name);
      setUrl(data?.url);
      setUsername(data?.username);
      setPassword(data?.password);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      HandleGetDetailCredential().then();
    }
  }, [HandleGetDetailCredential, id])

  const HandleSubmitData = useCallback(async (e) => {
    e.preventDefault();
    const credential = {
      id,
      name,
      url,
      username,
      password,
    };

    if (id) {
      await fetch(`http://localhost:3003/credentials/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credential)
      }).then(() => {
        window.location.href = '/credentials';
      });
    } else {
      AddCredentialLogic(credential).then((res) => {
        setName('');
        setUrl('');
        setUsername('');
        setPassword('');
        window.location.href = '/credentials';
      }, reason => {
        console.log(reason);
      })
    }
  }, [id, name, url, username, password, AddCredentialLogic]);

  return (
    <form onSubmit={HandleSubmitData}>
      <Flex gap="3" minW="max-content" flexDirection="column">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}/>
        </FormControl>
        <FormControl>
          <FormLabel>URL</FormLabel>
          <Input
            type='text'
            value={url}
            onChange={(e) => setUrl(e.target.value)}/>
        </FormControl>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type='text'
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button
          type="submit"
          colorScheme='teal'
        >
          Add
        </Button>
      </Flex>
    </form>
  );
};

export default Upsert;
