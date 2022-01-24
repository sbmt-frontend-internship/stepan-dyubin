import './App.css';
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { PeopleCard } from "../PeopleCard/PeopleCard";
import { fetchPeoplesThunk } from "../../features/peoples/thunks";
import { peoplesIdsSelector } from "../../features/peoples/selectors";

export function App() {
  const dispatch = useDispatch();
  const peopleIds = useSelector(peoplesIdsSelector)

  useEffect(( ) => {
    dispatch(fetchPeoplesThunk())
  }, [dispatch])

  return (
    <div className="App">
      {peopleIds.map((id) => (
        <PeopleCard key={id} id={id} />
      ))}
    </div>
  );
}
