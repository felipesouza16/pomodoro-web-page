import { Divider } from './components/Divider';
import { Header } from './components/Header';
import { Stopwatch } from './components/Stopwatch';
import { TodoList } from './components/TodoList';

export const App =
  () => (
    <div className="h-screen w-screen bg-red-400 font-mono flex flex-col">
      <Header />
      <Divider />
      <Stopwatch />
      <TodoList />
    </div>
  );
