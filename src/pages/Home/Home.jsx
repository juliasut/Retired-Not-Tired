import useEvents from '../../hooks/useEvents';

const Home = () => {
  const { events, isError, isLoading } = useEvents();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      {/* tami work here only! retard.. */}
      <h1>Retired Not Tired</h1>

      {events &&
        events.map((event) => (
          <div key={event.id}>
            <h2>{event.title}</h2>
          </div>
        ))}
      {/* <label>
        <input type="text" value="email" required />
      </label>
      <label>
        <input type="password" value="password" required />
      </label>
      <button type="submit">Submit</button> */}
    </div>
  );
};

export default Home;
