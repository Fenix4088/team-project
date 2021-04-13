import { instance } from "./commonAPIData";
import {AxiosResponse} from "axios";

export type PacksQueryParamsT = void | {
    packName?: string,
    pageCount?: number,
    min?: number,
    max?: number,
    page?: number
}

export type PacksRespT = {
    cardPacks: Array<PackT>;
    cardPacksTotalCount: number;
    maxCardsCount: number;
    minCardsCount: number;
    page: number;
    pageCount: number;
};

type PackT = {
    cardsCount: number;
    created: string;
    grade: number;
    more_id: string;
    name: string;
    path: string;
    private: boolean;
    rating: number;
    shots: number;
    type: string;
    updated: string;
    user_id: string;
    user_name: string;
    _id: string
};

export const packsAPI = {
    async getPacks(packsQueryParams: PacksQueryParamsT) {
        const res =  await instance.get<PacksRespT, AxiosResponse<PacksRespT>>("cards/pack", {
            params: packsQueryParams
        });
        return res.data;
    }
};
