import React, { useState } from "react";
import { makeStyles, Paper ,Typography, Button} from "@material-ui/core";
import './index.css';
import SherpaAutocomplete from "../../components/SherpaAutocomplete";
import { CalendarIcon } from "../../components/Icons/MainIcons";
import { MuiPickersUtilsProvider,KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import enLocale from 'date-fns/locale/en-GB';

const useException3Styles = makeStyles((theme) => ({
    root: {
      boxShadow: `0px 3px 8px ${theme.palette.grey["500"]}`,
    },
  }));
  
const Index = ({setSeletedCountry, setSeletedCurrency,setSeletedUnit}) => {
    
    const classes = useException3Styles();
    const [country, setCountry] = useState(null);
    const [datefrom, setDatefrom] = useState(null);
    const [dateuntil, setDateuntil] = useState(null);
    const [currency, setcurrency] = useState(null);
    const [unit, setUnit] = useState(null);
    const [Recent, setValue] = useState(null);
    const Unitoption = [
        { id: 1, name: "Kilo" },
        { id: 2, name: "lb" },
      ];
      const Recentoption = [
        { id: 1, name: "1 Week" },
        { id: 2, name: "3 Weeks" },
        { id: 3, name: "1 Month" },
        { id: 4, name: "3 Months" },
        { id: 5, name: "6 Months" },
        { id: 6, name: "9 Months" },
        { id: 7, name: "1 Year" },
      ];
      const currencyoption = [
        { id: 1, name: "US Cent" },
        { id: 2, name: "Local Currency" },
      ];
      const countryNames = [
        { id: 1, name: "NewYork" },
        { id: 2, name: "China" },
        { id: 3, name: "Pakistan" },
        { id: 4, name: "India" },
        { id: 5, name: "Brazil" },
      ];
      const handleChangeunit = (_, Unitoption) => setUnit(() => Unitoption);
      const handleChangecurrency = (_, currencyoption) => setcurrency(() => currencyoption);
      const handleChangerecent = (_, Recentoption) => setValue(() => Recentoption);
      const handleChangecountry = (_, countryNames) => setCountry(() => countryNames);

      const submit = () => {
        let x = datefrom;
        let yef = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(x);
        let mof = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(x);
        let daf = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(x);
        let from =`${daf}-${mof}-${yef}`;
        let d = dateuntil;
        let yeu = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mou = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
        let dau = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        let until =`${dau}-${mou}-${yeu}`;
        console.log(country,from,until,currency,unit,Recent)
        if (currency+country+unit==null) {
            alert(currency,country,unit);
          }
          else {
            setSeletedCountry(country.name)
            setSeletedCurrency(currency.name+"/")
            setSeletedUnit(""+unit.name)
            alert(currency.name,country.name,unit.name);
          }
        }
    const Reset =()=>{
            setCountry("China")
            setcurrency("US Cent")
            setUnit("Kilo")
        
    };
    return (
        
        <div>
            <form>
            <Paper id="filter" className={classes.root} style={{ width: 250, height: 250 }}>
                <Typography variant="h5"className="filtertitle">Filter</Typography>
                <Typography variant="h5"className="reset" onClick={() => {Reset();}}>Reset Filter</Typography>
                <div className="setting">
                <form>
                    <div className="input">
                        <div className="inputfield">
                            <SherpaAutocomplete
                            label="Countries"
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.id === value.id}
                            options={countryNames}
                            value={country}
                            onChange={handleChangecountry}
                            />
                        </div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enLocale}>
                        <div className="inputfield">
                            <KeyboardDatePicker
                                style={{ innerWidth: 16 }}
                                format="dd-MM-yyyy"
                                label="From"
                                disableToolbar
                                initialFocusedDate={null}
                                value={datefrom}
                                placeholder={"Select Date"}
                                keyboardIcon={<CalendarIcon style={{ fontSize: 16 }} />}
                                onChange={(datefrom) => {
                                    setDatefrom(datefrom);
                                }}
                                DialogProps={{
                                    PaperProps: {
                                    elevation: 3,
                                    },
                                }}
                            />
                        </div>
                        <div className="inputfield">
                        <KeyboardDatePicker
                            format="dd-MM-yyyy"
                            label="Until"
                            disableToolbar
                            initialFocusedDate={null}
                            value={dateuntil}
                            placeholder={"Select Date"}
                            keyboardIcon={<CalendarIcon style={{ fontSize: 16 }} />}
                            onChange={(dateuntil) => {
                                setDateuntil(dateuntil);
                            }}
                            DialogProps={{
                                PaperProps: {
                                elevation: 3,
                                },
                            }}
                        />
                        </div>
                        </MuiPickersUtilsProvider>
                        <div className="inputfield">
                            <SherpaAutocomplete 
                                label="Currency"
                                getOptionLabel={(currencyoption) => currencyoption.name}
                                getOptionSelected={(currencyoption, currency) => currencyoption.id === currency.id}
                                options={currencyoption}
                                value={currency}
                                onChange={handleChangecurrency}
                            />
                        </div>
                        <div className="inputfield">
                            <SherpaAutocomplete 
                                label="Unit"
                                getOptionLabel={(Unitoption) => Unitoption.name}
                                getOptionSelected={(Unitoption, unit) => Unitoption.id === unit.id}
                                options={Unitoption}
                                value={unit}
                                onChange={handleChangeunit}
                            />
                        </div>
                        <div className="inputfield">
                            <SherpaAutocomplete 
                                label="Recent Data"
                                getOptionLabel={(Recentoption) => Recentoption.name}
                                getOptionSelected={(Recentoption, Recent) => Recentoption.id === Recent.id}
                                options={Recentoption}
                                value={Recent}
                                onChange={handleChangerecent}
                            />
                        </div>
                    </div>
                    <div className="apply">
                        <Button onClick={() => {submit();}}>Apply</Button>
                    </div>  
                    </form>
                </div>
            </Paper>
            </form>
        </div>
    )
}
export default Index
