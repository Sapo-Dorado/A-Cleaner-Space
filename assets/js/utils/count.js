export async function countRequest(type) {
  const requestOptions = {
    method: type,
    headers: { 'Content-Type': 'application/json' },
  };
  const response =  await fetch('/api/count', requestOptions);
  const data = await(response.json());
  return data.count

}
