import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { updateChar } from "../../features/peoples/peoplesSlice";
import { peopleByIdSelector } from "../../features/peoples/selectors";

export const PeopleCard = memo(({ id }) => {
    const dispatch = useDispatch()

    const { name, height, mass } = useSelector(state => peopleByIdSelector(state, id))

    const handleChange = useCallback((e) => {
        dispatch(updateChar({
            id,
            changes: {
                height: e.target.value
            }
        }))
    } , [dispatch, id])


    return (
        <div style={{ width: '100%', marginBottom: 10, border: '1px solid black' }}>
            <h3>{name}</h3>
            <p>H: {height}</p>
            <p>M: {mass}</p>
            <input type="number" value={height} onChange={handleChange}/>
        </div>
    )
})
