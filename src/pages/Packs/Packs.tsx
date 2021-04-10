import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPacks } from "./packsReducer";
import {v1} from "uuid";

export const Packs = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getPacks({pageCount: 100}));
    }, [dispatch]);

    const packsData = useAppSelector((state) => state.packs.packsTableData);
    const isLoading = useAppSelector((state) => state.packs.isLoading);
    console.log(packsData)

    return (
        <>
            <table style={{border: "1px solid blue"}}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Cards count</th>
                    <th>Updated</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {isLoading ? <tr><td>"Loading"</td></tr> : packsData?.cardPacks.map(item => {
                    return <tr key={v1()}>
                        <td>packname</td>
                        <td>22</td>
                        <td>22/12/12</td>
                        <td>
                            <button>+</button>
                            <button>del</button>
                            <a href="#">cards</a>
                        </td>

                    </tr>
                })}

                </tbody>
            </table>
        </>
    );
};
