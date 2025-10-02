function App() {
  const username="hello world";
  return (
    <>
    {/* inside {} we can only write evaluated expresions like variable and cannot write if else.. */}
      <h2>there is something written in here {username}</h2>
    </>
  )
}

export default App