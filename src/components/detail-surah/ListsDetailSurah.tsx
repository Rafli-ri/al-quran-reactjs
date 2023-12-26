import React, { useEffect } from "react";
import { useAlquran } from "../../store/quran-context";
import { useParams } from "react-router-dom";
import * as ActionTypes from "../../store/ActionTypes";
import Loading from "../Loading";
import Error from "../Error";
import ItemsDetailSurat from "./ItemsDetailSurat";

const ListsDetalSurah: React.FC = () => {
  const { nomor } = useParams<{ nomor: string }>();
  const { quranState, quranDispatch }: any = useAlquran();

  useEffect(() => {
    const fetchData = async () => {
      try {
        quranDispatch({ type: ActionTypes.LOADING });
        const responseDetail = await fetch(
          `https://equran.id/api/v2/surat/${nomor}`
        );
        const { data } = await responseDetail.json();
        // console.log(data);
        quranDispatch({ type: ActionTypes.GET_SURAH_DETAIL, payload: data });
      } catch (error) {
        quranDispatch({ type: ActionTypes.FETCH_FAILED, payload: error });
      }
    };
    fetchData();
  }, [nomor, quranDispatch]);

  return (
    <div>
      <Loading loading={quranState.loading} />
      <Error error={quranState.error} />
      <ItemsDetailSurat surahDetail={quranState.surahDetail} />
    </div>
  );
};

export default ListsDetalSurah;
