import { useState } from "react";
import { Button } from "./Button/Button";
import { Card } from "./Card/Card";
import { Container } from "./Container/Container";
import { TaskListItem } from "./TaskListItem/TaskListItem";
import { TextField } from "./TextField/TextField";

function App() {
  const [state, setState] = useState("")

  const handleChange = (e) => {
    setState(e.target.value)
  }

  const handleClick = () => {
    console.log('add');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tete</h1>
      </header>
      <main>
        <Container>
          <Card>
            <TextField
              label="task"
              name="task"
              value={state}
              onChange={e => handleChange(e)}
            />
            <div>
              <TaskListItem>
                  Aqui vai uma task
              </TaskListItem>
            </div>
            <Button onClick={handleClick}>Adicionar</Button>
          </Card>
        </Container>
      </main>
    </div>
  );
}

export default App;
