import './App.css';
import Column from './components/Column';

function App() {
  return (
    <div>
      <h1>Kanban Board</h1>
      <div className="App">
        <Column state="PLANNED" />
        <Column state="ONGOING" />
        <Column state="DONE" />
      </div>
    </div>
  );
}
export default App;
