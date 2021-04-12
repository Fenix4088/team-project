import { instance } from "./commonAPIData";
import { AxiosResponse } from "axios";

export type PacksQueryParamsT = void | {
    packName?: string;
    pageCount?: number;
    min?: number;
    max?: number;
    page?: number;
};

export type PacksRespT = {
    cardPacks: Array<PackT>;
    cardPacksTotalCount: number;
    maxCardsCount: number;
    minCardsCount: number;
    page: number;
    pageCount: number;
};

export type PackT = {
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
    _id: string;
};

export type NewPackT = {
    name: string;
    grade?: number;
    shots?: number;
    rating?: number;
    deckCover?: string;
    private?: boolean;
};

export const packsAPI = {
    async getPacks(packsQueryParams: PacksQueryParamsT) {
        const res = await instance.get<PacksRespT>("cards/pack", {
            params: packsQueryParams
        });
        return res.data;
    },

    async addPack(newPackData: NewPackT) {
        const res = await instance.post<{ newCardsPack: PackT }>("cards/pack", {
            cardsPack: newPackData
        });
        return res.data;
    },

    async deletePack(packId: string) {
        // ! you cant delete not your Pack
        const res = await instance.delete("cards/pack", {
            params: {
                id: packId
            }
        });
        console.log(res);
    }
};
