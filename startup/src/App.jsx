import MyButton from "./components/MyButton";
import LessonCard from "./components/LessonCard";

function App() {
  return (
    <>
      <div className="m-5">
        <MyButton />
        <MyButton />
        <MyButton />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <LessonCard />
          <LessonCard />
          <LessonCard />
          <LessonCard />
          <LessonCard />
          <LessonCard />
        </div>
      </div>

    </>
  )
}

export default App
