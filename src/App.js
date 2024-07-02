import CodeEditor from "./Components/code_editor";

function App() {
  return (
    <div className="App">
      <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#282c34'
            }}
        >
            <CodeEditor />
        </div>
    </div>
  );
}

export default App;
