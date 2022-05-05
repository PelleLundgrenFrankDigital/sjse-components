import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { DatePicker, DatePickerWeek, ThemeProvider, greenTheme } from "@sjse/component-library";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import { DatePicker as MuiDatePicker } from "@mui/lab";
// import { TextField } from "@mui/material";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [dateString, setDateString] = useState<string | undefined>();
  // const [dateObject, setDateObject] = useState<Date | null>(null);
  const minDate = "";
  const maxDate = "";
  const [date, setDate] = useState("2021-06-16");

  return (
    <ThemeProvider theme={greenTheme}>
      <Head>
        <title>SJ Components</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div style={{ maxWidth: "400px" }}>
          <DatePickerWeek
            numberOfDays={11}
            lang="sv"
            minDate={minDate}
            maxDate={maxDate}
            value={date}
            onChange={(newDate: string) => {
              setDate(newDate);
            }}
          />
        </div>
        <DatePicker
          id="SJ Datepicker"
          label="SJ Datepicker"
          value={dateString}
          onChange={(date: string | undefined) => {
            setDateString(date);
          }}
        />
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MuiDatePicker
            label="Mui Datepicker"
            value={dateObject}
            onChange={(newValue) => {
              setDateObject(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider> */}
      </main>
    </ThemeProvider>
  );
};

export default Home;
