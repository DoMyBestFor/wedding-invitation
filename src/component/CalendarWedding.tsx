import { Calendar } from "antd";
import moment from "moment";
import { WeddingInfo } from "../style/Font";
import { theme } from "../style/global/Theme";

export const CalendarWedding: React.FC = () => {
  return (
    <Calendar
      headerRender={() => {
        let today = new Date();
        let dday = new Date(2022, 6, 9);
        let gap = dday.getTime() - today.getTime();
        let result = Math.ceil(gap / (1000 * 60 * 60 * 24));

        return (
          <>
            <WeddingInfo>7월 9일</WeddingInfo>
            <WeddingInfo>토요일 오후 2시</WeddingInfo>
            <div>{`D-${result}`}</div>
          </>
        );
      }}
      value={moment("2022-07-09")}
      fullscreen={false}
      disabledDate={(date: moment.Moment) => {
        if (date.month() > 6) return true;
        if (date.month() < 6) return true;
        return false;
      }}
      dateFullCellRender={(date: moment.Moment) => {
        if (date.date() === 9)
          return (
            <div style={{ borderRadius: "10px", backgroundColor: "#FFE8E8" }}>
              <div>9</div>
            </div>
          );
        if (date.month() > 6) return <></>;
        if (date.month() < 6) return <></>;
        return (
          <div
            style={{
              color: `${
                date.day() === 0 || date.day() === 6
                  ? `${theme.colors.red}`
                  : `${theme.colors.black}`
              }`,
            }}
          >
            {date.date()}
          </div>
        );
      }}
    />
  );
};
