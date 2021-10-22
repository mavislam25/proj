import React, { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Popper,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import SherpaInput from "../../components/SherpaInput";
import { DynamicFlag } from "../Icons/CountryFlags";
import { CheckIcon } from "../Icons/MainIcons";
import { CaretDownIcon } from "../Icons/Carets";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  phoneNumberInput: {
    width: "100%",
    ...theme.typography.body1,
  },
  phoneNumberInputOverride: {
    color: ({ phoneNumber, disabled }) =>
      phoneNumber && !disabled
        ? theme.palette.grey[700]
        : theme.palette.grey[500],
  },
  phoneNumberInputAdornment: {
    padding: "3px 0 5px",
    margin: 0,
  },
  selectedCountryFlag: {
    padding: 0,
  },
  caretDown: {
    width: 5,
    height: 4,
    margin: "0 5px",
  },
  phoneNumberExtension: {
    padding: 0,
    margin: "0 4px",
    color: ({ phoneNumber, disabled }) =>
      phoneNumber && !disabled
        ? theme.palette.grey[700]
        : theme.palette.grey[500],
  },
  flag: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "50%",
    width: "16px",
    height: "16px",
  },
  root: {
    width: "100%",
    position: "relative",
  },
  popper: {
    position: "absolute",
    top: "100%",
    right: 0,
    marginRight: "10%",
    boxShadow: `0px 3px 8px ${theme.palette.grey[500]}`,
    zIndex: 10,
    borderBottomRightRadius: "4px",
    borderBottomLeftRadius: "4px",
    overflow: "hidden",
  },
  paper: {
    boxShadow: "none",
    margin: 0,
  },
  option: {
    minHeight: "auto",
    alignItems: "center",
    padding: "8px 0",
    margin: "0 3px",
    '&[data-focus="true"]': {
      backgroundColor: theme.palette.accent.lightBlue,
    },
  },
  popperDisablePortal: {
    position: "relative",
  },
  autocompleteListbox: {
    padding: "3px 0",
  },
  iconSelected: {
    width: 9,
    height: 9,
    marginRight: "4px",
    color: theme.palette.primary.main,
  },
  autocompleteCountryName: {
    padding: "0 4px",
  },
  autocompleteCountryCode: {
    color: theme.palette.grey[500],
  },
}));

const countryData = {
  HK: {
    name: "Hong Kong SAR China",
    callingCode: "852",
  },
  AF: {
    name: "Afghanistan",
    callingCode: "93",
  },
  AL: {
    name: "Albania",
    callingCode: "355",
  },
  DZ: {
    name: "Algeria",
    callingCode: "213",
  },
  AS: {
    name: "American Samoa",
    callingCode: "1",
  },
  AD: {
    name: "Andorra",
    callingCode: "376",
  },
  AO: {
    name: "Angola",
    callingCode: "244",
  },
  AI: {
    name: "Anguilla",
    callingCode: "1",
  },
  AG: {
    name: "Antigua & Barbuda",
    callingCode: "1",
  },
  AR: {
    name: "Argentina",
    callingCode: "54",
  },
  AM: {
    name: "Armenia",
    callingCode: "374",
  },
  AW: {
    name: "Aruba",
    callingCode: "297",
  },
  AU: {
    name: "Australia",
    callingCode: "61",
  },
  AZ: {
    name: "Azerbaijan",
    callingCode: "994",
  },
  BS: {
    name: "Bahamas",
    callingCode: "1",
  },
  BH: {
    name: "Bahrain",
    callingCode: "973",
  },
  BD: {
    name: "Bangladesh",
    callingCode: "880",
  },
  BB: {
    name: "Barbados",
    callingCode: "1",
  },
  BY: {
    name: "Belarus",
    callingCode: "375",
  },
  BE: {
    name: "Belgium",
    callingCode: "32",
  },
  BZ: {
    name: "Belize",
    callingCode: "501",
  },
  BJ: {
    name: "Benin",
    callingCode: "229",
  },
  BM: {
    name: "Bermuda",
    callingCode: "1",
  },
  BT: {
    name: "Bhutan",
    callingCode: "975",
  },
  BO: {
    name: "Bolivia",
    callingCode: "591",
  },
  BA: {
    name: "Bosnia & Herzegovina",
    callingCode: "387",
  },
  BW: {
    name: "Botswana",
    callingCode: "267",
  },
  BR: {
    name: "Brazil",
    callingCode: "55",
  },
  IO: {
    name: "British Indian Ocean Territory",
    callingCode: "246",
  },
  VG: {
    name: "British Virgin Islands",
    callingCode: "1",
  },
  BN: {
    name: "Brunei",
    callingCode: "673",
  },
  BG: {
    name: "Bulgaria",
    callingCode: "359",
  },
  BF: {
    name: "Burkina Faso",
    callingCode: "226",
  },
  BI: {
    name: "Burundi",
    callingCode: "257",
  },
  KH: {
    name: "Cambodia",
    callingCode: "855",
  },
  CM: {
    name: "Cameroon",
    callingCode: "237",
  },
  CA: {
    name: "Canada",
    callingCode: "1",
  },
  CV: {
    name: "Cape Verde",
    callingCode: "238",
  },
  KY: {
    name: "Cayman Islands",
    callingCode: "1",
  },
  CF: {
    name: "Central African Republic",
    callingCode: "236",
  },
  TD: {
    name: "Chad",
    callingCode: "235",
  },
  CL: {
    name: "Chile",
    callingCode: "56",
  },
  CN: {
    name: "China",
    callingCode: "86",
  },
  CX: {
    name: "Christmas Island",
    callingCode: "61",
  },
  CC: {
    name: "Cocos (Keeling) Islands",
    callingCode: "61",
  },
  CO: {
    name: "Colombia",
    callingCode: "57",
  },
  KM: {
    name: "Comoros",
    callingCode: "269",
  },
  CD: {
    name: "Congo - Kinshasa",
    callingCode: "243",
  },
  CG: {
    name: "Congo - Brazzaville",
    callingCode: "242",
  },
  CK: {
    name: "Cook Islands",
    callingCode: "682",
  },
  CR: {
    name: "Costa Rica",
    callingCode: "506",
  },
  HR: {
    name: "Croatia",
    callingCode: "385",
  },
  CU: {
    name: "Cuba",
    callingCode: "53",
  },
  CY: {
    name: "Cyprus",
    callingCode: "357",
  },
  CZ: {
    name: "Czechia",
    callingCode: "420",
  },
  DK: {
    name: "Denmark",
    callingCode: "45",
  },
  DJ: {
    name: "Djibouti",
    callingCode: "253",
  },
  DM: {
    name: "Dominica",
    callingCode: "1",
  },
  DO: {
    name: "Dominican Republic",
    callingCode: "1",
  },
  EC: {
    name: "Ecuador",
    callingCode: "593",
  },
  EG: {
    name: "Egypt",
    callingCode: "20",
  },
  SV: {
    name: "El Salvador",
    callingCode: "503",
  },
  GQ: {
    name: "Equatorial Guinea",
    callingCode: "240",
  },
  ER: {
    name: "Eritrea",
    callingCode: "291",
  },
  EE: {
    name: "Estonia",
    callingCode: "372",
  },
  SZ: {
    name: "Eswatini",
    callingCode: "268",
  },
  ET: {
    name: "Ethiopia",
    callingCode: "251",
  },
  FK: {
    name: "Falkland Islands",
    callingCode: "500",
  },
  FO: {
    name: "Faroe Islands",
    callingCode: "298",
  },
  FJ: {
    name: "Fiji",
    callingCode: "679",
  },
  FI: {
    name: "Finland",
    callingCode: "358",
  },
  FR: {
    name: "France",
    callingCode: "33",
  },
  GF: {
    name: "French Guiana",
    callingCode: "594",
  },
  PF: {
    name: "French Polynesia",
    callingCode: "689",
  },
  GA: {
    name: "Gabon",
    callingCode: "241",
  },
  GM: {
    name: "Gambia",
    callingCode: "220",
  },
  GE: {
    name: "Georgia",
    callingCode: "995",
  },
  DE: {
    name: "Germany",
    callingCode: "49",
  },
  GH: {
    name: "Ghana",
    callingCode: "233",
  },
  GI: {
    name: "Gibraltar",
    callingCode: "350",
  },
  GR: {
    name: "Greece",
    callingCode: "30",
  },
  GL: {
    name: "Greenland",
    callingCode: "299",
  },
  GD: {
    name: "Grenada",
    callingCode: "1",
  },
  GP: {
    name: "Guadeloupe",
    callingCode: "590",
  },
  GU: {
    name: "Guam",
    callingCode: "1",
  },
  GT: {
    name: "Guatemala",
    callingCode: "502",
  },
  GW: {
    name: "Guinea-Bissau",
    callingCode: "245",
  },
  GN: {
    name: "Guinea",
    callingCode: "224",
  },
  GY: {
    name: "Guyana",
    callingCode: "592",
  },
  HT: {
    name: "Haiti",
    callingCode: "509",
  },
  HN: {
    name: "Honduras",
    callingCode: "504",
  },
  HU: {
    name: "Hungary",
    callingCode: "36",
  },
  IS: {
    name: "Iceland",
    callingCode: "354",
  },
  IN: {
    name: "India",
    callingCode: "91",
  },
  ID: {
    name: "Indonesia",
    callingCode: "62",
  },
  IR: {
    name: "Iran",
    callingCode: "98",
  },
  IQ: {
    name: "Iraq",
    callingCode: "964",
  },
  IE: {
    name: "Ireland",
    callingCode: "353",
  },
  IM: {
    name: "Isle of Man",
    callingCode: "44",
  },
  IL: {
    name: "Israel",
    callingCode: "972",
  },
  IT: {
    name: "Italy",
    callingCode: "39",
  },
  CI: {
    name: "Côte d’Ivoire",
    callingCode: "225",
  },
  JM: {
    name: "Jamaica",
    callingCode: "1",
  },
  JP: {
    name: "Japan",
    callingCode: "81",
  },
  JO: {
    name: "Jordan",
    callingCode: "962",
  },
  KZ: {
    name: "Kazakhstan",
    callingCode: "7",
  },
  KE: {
    name: "Kenya",
    callingCode: "254",
  },
  KI: {
    name: "Kiribati",
    callingCode: "686",
  },
  XK: {
    name: "Kosovo",
    callingCode: "383",
  },
  KW: {
    name: "Kuwait",
    callingCode: "965",
  },
  KG: {
    name: "Kyrgyzstan",
    callingCode: "996",
  },
  LA: {
    name: "Laos",
    callingCode: "856",
  },
  LV: {
    name: "Latvia",
    callingCode: "371",
  },
  LB: {
    name: "Lebanon",
    callingCode: "961",
  },
  LS: {
    name: "Lesotho",
    callingCode: "266",
  },
  LR: {
    name: "Liberia",
    callingCode: "231",
  },
  LY: {
    name: "Libya",
    callingCode: "218",
  },
  LI: {
    name: "Liechtenstein",
    callingCode: "423",
  },
  LT: {
    name: "Lithuania",
    callingCode: "370",
  },
  LU: {
    name: "Luxembourg",
    callingCode: "352",
  },
  MO: {
    name: "Macao SAR China",
    callingCode: "853",
  },
  MG: {
    name: "Madagascar",
    callingCode: "261",
  },
  MW: {
    name: "Malawi",
    callingCode: "265",
  },
  MY: {
    name: "Malaysia",
    callingCode: "60",
  },
  MV: {
    name: "Maldives",
    callingCode: "960",
  },
  ML: {
    name: "Mali",
    callingCode: "223",
  },
  MT: {
    name: "Malta",
    callingCode: "356",
  },
  MH: {
    name: "Marshall Islands",
    callingCode: "692",
  },
  MQ: {
    name: "Martinique",
    callingCode: "596",
  },
  MR: {
    name: "Mauritania",
    callingCode: "222",
  },
  MU: {
    name: "Mauritius",
    callingCode: "230",
  },
  YT: {
    name: "Mayotte",
    callingCode: "262",
  },
  MX: {
    name: "Mexico",
    callingCode: "52",
  },
  FM: {
    name: "Micronesia",
    callingCode: "691",
  },
  MD: {
    name: "Moldova",
    callingCode: "373",
  },
  MC: {
    name: "Monaco",
    callingCode: "377",
  },
  MN: {
    name: "Mongolia",
    callingCode: "976",
  },
  ME: {
    name: "Montenegro",
    callingCode: "382",
  },
  MS: {
    name: "Montserrat",
    callingCode: "1",
  },
  MA: {
    name: "Morocco",
    callingCode: "212",
  },
  MZ: {
    name: "Mozambique",
    callingCode: "258",
  },
  MM: {
    name: "Myanmar (Burma)",
    callingCode: "95",
  },
  NA: {
    name: "Namibia",
    callingCode: "264",
  },
  NR: {
    name: "Nauru",
    callingCode: "674",
  },
  NP: {
    name: "Nepal",
    callingCode: "977",
  },
  NL: {
    name: "Netherlands",
    callingCode: "31",
  },
  NC: {
    name: "New Caledonia",
    callingCode: "687",
  },
  NZ: {
    name: "New Zealand",
    callingCode: "64",
  },
  NI: {
    name: "Nicaragua",
    callingCode: "505",
  },
  NE: {
    name: "Niger",
    callingCode: "227",
  },
  NG: {
    name: "Nigeria",
    callingCode: "234",
  },
  NU: {
    name: "Niue",
    callingCode: "683",
  },
  NF: {
    name: "Norfolk Island",
    callingCode: "672",
  },
  KP: {
    name: "North Korea",
    callingCode: "850",
  },
  MK: {
    name: "North Macedonia",
    callingCode: "389",
  },
  MP: {
    name: "Northern Mariana Islands",
    callingCode: "1",
  },
  NO: {
    name: "Norway",
    callingCode: "47",
  },
  OM: {
    name: "Oman",
    callingCode: "968",
  },
  PK: {
    name: "Pakistan",
    callingCode: "92",
  },
  PS: {
    name: "Palestinian Territories",
    callingCode: "970",
  },
  PA: {
    name: "Panama",
    callingCode: "507",
  },
  PG: {
    name: "Papua New Guinea",
    callingCode: "675",
  },
  PY: {
    name: "Paraguay",
    callingCode: "595",
  },
  PE: {
    name: "Peru",
    callingCode: "51",
  },
  PH: {
    name: "Philippines",
    callingCode: "63",
  },
  PL: {
    name: "Poland",
    callingCode: "48",
  },
  PT: {
    name: "Portugal",
    callingCode: "351",
  },
  PR: {
    name: "Puerto Rico",
    callingCode: "1",
  },
  QA: {
    name: "Qatar",
    callingCode: "974",
  },
  RE: {
    name: "Réunion",
    callingCode: "262",
  },
  RO: {
    name: "Romania",
    callingCode: "40",
  },
  RU: {
    name: "Russia",
    callingCode: "7",
  },
  RW: {
    name: "Rwanda",
    callingCode: "250",
  },
  BL: {
    name: "St. Barthélemy",
    callingCode: "590",
  },
  SH: {
    name: "St. Helena",
    callingCode: "290",
  },
  KN: {
    name: "St. Kitts & Nevis",
    callingCode: "1",
  },
  LC: {
    name: "St. Lucia",
    callingCode: "1",
  },
  PM: {
    name: "St. Pierre & Miquelon",
    callingCode: "508",
  },
  VC: {
    name: "St. Vincent & Grenadines",
    callingCode: "1",
  },
  WS: {
    name: "Samoa",
    callingCode: "685",
  },
  SM: {
    name: "San Marino",
    callingCode: "378",
  },
  ST: {
    name: "São Tomé & Príncipe",
    callingCode: "239",
  },
  SA: {
    name: "Saudi Arabia",
    callingCode: "966",
  },
  SN: {
    name: "Senegal",
    callingCode: "221",
  },
  RS: {
    name: "Serbia",
    callingCode: "381",
  },
  SC: {
    name: "Seychelles",
    callingCode: "248",
  },
  SL: {
    name: "Sierra Leone",
    callingCode: "232",
  },
  SG: {
    name: "Singapore",
    callingCode: "65",
  },
  SK: {
    name: "Slovakia",
    callingCode: "421",
  },
  SI: {
    name: "Slovenia",
    callingCode: "386",
  },
  SB: {
    name: "Solomon Islands",
    callingCode: "677",
  },
  SO: {
    name: "Somalia",
    callingCode: "252",
  },
  ZA: {
    name: "South Africa",
    callingCode: "27",
  },
  KR: {
    name: "South Korea",
    callingCode: "82",
  },
  ES: {
    name: "Spain",
    callingCode: "34",
  },
  LK: {
    name: "Sri Lanka",
    callingCode: "94",
  },
  SD: {
    name: "Sudan",
    callingCode: "249",
  },
  SR: {
    name: "Suriname",
    callingCode: "597",
  },
  SJ: {
    name: "Svalbard & Jan Mayen",
    callingCode: "47",
  },
  SE: {
    name: "Sweden",
    callingCode: "46",
  },
  CH: {
    name: "Switzerland",
    callingCode: "41",
  },
  SY: {
    name: "Syria",
    callingCode: "963",
  },
  TW: {
    name: "Taiwan",
    callingCode: "886",
  },
  TJ: {
    name: "Tajikistan",
    callingCode: "992",
  },
  TZ: {
    name: "Tanzania",
    callingCode: "255",
  },
  TH: {
    name: "Thailand",
    callingCode: "66",
  },
  TL: {
    name: "Timor-Leste",
    callingCode: "670",
  },
  TG: {
    name: "Togo",
    callingCode: "228",
  },
  TK: {
    name: "Tokelau",
    callingCode: "690",
  },
  TO: {
    name: "Tonga",
    callingCode: "676",
  },
  TT: {
    name: "Trinidad & Tobago",
    callingCode: "1",
  },
  TN: {
    name: "Tunisia",
    callingCode: "216",
  },
  TR: {
    name: "Turkey",
    callingCode: "90",
  },
  TM: {
    name: "Turkmenistan",
    callingCode: "993",
  },
  TC: {
    name: "Turks & Caicos Islands",
    callingCode: "1",
  },
  TV: {
    name: "Tuvalu",
    callingCode: "688",
  },
  AE: {
    name: "United Arab Emirates",
    callingCode: "971",
  },
  UG: {
    name: "Uganda",
    callingCode: "256",
  },
  UA: {
    name: "Ukraine",
    callingCode: "380",
  },
  GB: {
    name: "United Kingdom",
    callingCode: "44",
  },
  US: {
    name: "United States",
    callingCode: "1",
  },
  UY: {
    name: "Uruguay",
    callingCode: "598",
  },
  VI: {
    name: "U.S. Virgin Islands",
    callingCode: "1",
  },
  UZ: {
    name: "Uzbekistan",
    callingCode: "998",
  },
  VU: {
    name: "Vanuatu",
    callingCode: "678",
  },
  VA: {
    name: "Vatican City",
    callingCode: "39",
  },
  VE: {
    name: "Venezuela",
    callingCode: "58",
  },
  VN: {
    name: "Vietnam",
    callingCode: "84",
  },
  WF: {
    name: "Wallis & Futuna",
    callingCode: "681",
  },
  EH: {
    name: "Western Sahara",
    callingCode: "212",
  },
  YE: {
    name: "Yemen",
    callingCode: "967",
  },
  ZM: {
    name: "Zambia",
    callingCode: "260",
  },
  ZW: {
    name: "Zimbabwe",
    callingCode: "263",
  },
};

const getCallingCode = _.memoize(
  (countryCode) => `+${countryData[countryCode].callingCode}`
);

// Support autocomplete filtering by country name, calling code, or ISO alpha-2 country code
const filterOptions = createFilterOptions({
  stringify: (countryCode) => {
    return `${countryData[countryCode].name} ${getCallingCode(
      countryCode
    )} ${countryCode}`;
  },
});

const PhoneNumberInput = ({
  value,
  onChange,
  isValid,
  helperText,
  label,
  initialCountryCode,
  disabled,
  required,
}) => {
  let popperAnchor = React.useRef();

  const [hasMultipleCountryMatches, setHasMultipleCountryMatches] = useState(
    false
  );
  const [selectedCountry, setSelectedCountry] = useState(initialCountryCode);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [popperOpen, setPopperOpen] = useState(false);
  const classes = useStyles({ phoneNumber, disabled });

  // Process passed value into selectedCountry and phoneNumber
  useEffect(() => {
    if (
      value !== null &&
      value !== `${getCallingCode(selectedCountry)} ${phoneNumber}`
    ) {
      const matchingCountryCodes = Object.keys(
        countryData
      ).filter((countryCode) => value.startsWith(getCallingCode(countryCode)));

      if (matchingCountryCodes && matchingCountryCodes.length > 0) {
        setHasMultipleCountryMatches(matchingCountryCodes.length > 1);
        setSelectedCountry(matchingCountryCodes[0]);
        setPhoneNumber(
          value.split(getCallingCode(matchingCountryCodes[0]))[1].trim()
        );
      } else {
        setSelectedCountry(selectedCountry);
        setPhoneNumber(value);
      }
    }
  }, [value]);

  // Concatenate and send phone number to onChange when selectedCountry or phoneNumber are updated
  const callOnChange = (country, number) =>
    onChange(`${getCallingCode(country)} ${number}`);

  // Disallow non-numeric (spaces are ok)
  const phoneNumberOnChange = (newPhoneNumber) => {
    let pattern = new RegExp(/^[0-9 ]+$/);
    if (newPhoneNumber === "" || pattern.test(newPhoneNumber)) {
      setPhoneNumber(newPhoneNumber);
      callOnChange(selectedCountry, newPhoneNumber);
    }
  };

  const getHelperText = () => {
    if (isValid && helperText && phoneNumber && !isValid(value)) {
      return helperText;
    }
    return " ";
  };

  return (
    <div className={classes.root}>
      <div>
        <SherpaInput
          value={phoneNumber}
          onChange={(val) => phoneNumberOnChange(val)}
          label={label}
          error={isValid && phoneNumber && !isValid(phoneNumber)}
          helperText={getHelperText()}
          disabled={disabled}
          required={required}
          classes={{ root: classes.phoneNumberInput }}
          InputProps={{
            classes: {
              input: classes.phoneNumberInputOverride,
            },
            inputProps: {
              ref: popperAnchor,
            },
            startAdornment: (
              <InputAdornment
                position="start"
                className={classes.phoneNumberInputAdornment}
              >
                <IconButton
                  onClick={() => setPopperOpen(true)}
                  disabled={disabled}
                  className={classes.selectedCountryFlag}
                >
                  <DynamicFlag
                    country={
                      hasMultipleCountryMatches ? "DEFAULT" : selectedCountry
                    }
                    className={classes.flag}
                  />
                  <CaretDownIcon className={classes.caretDown} />
                </IconButton>
                <Typography
                  variant="body1"
                  className={classes.phoneNumberExtension}
                >
                  {getCallingCode(selectedCountry)}
                </Typography>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Popper
        id="phone-number-input-popper"
        anchorEl={popperAnchor.current}
        className={classes.popper}
        open={popperOpen}
        placement="bottom-end"
        disablePortal={true}
      >
        <Autocomplete
          open={popperOpen}
          disableClearable
          disablePortal
          forcePopupIcon={false}
          classes={{
            paper: classes.paper,
            option: classes.option,
            popperDisablePortal: classes.popperDisablePortal,
            listbox: classes.autocompleteListbox,
          }}
          value={selectedCountry}
          onChange={(event, newValue) => {
            setHasMultipleCountryMatches(false);
            setSelectedCountry(newValue);
            setPopperOpen(false);
            callOnChange(newValue, phoneNumber);
          }}
          options={Object.keys(countryData)}
          filterOptions={filterOptions}
          getOptionLabel={(countryCode) => countryData[countryCode].name}
          renderOption={(countryCode, { selected }) => {
            return (
              <>
                <CheckIcon
                  className={classes.iconSelected}
                  style={{ visibility: selected ? "visible" : "hidden" }}
                />
                <DynamicFlag country={countryCode} className={classes.flag} />
                <Typography
                  variant="body1"
                  className={classes.autocompleteCountryName}
                >
                  {countryData[countryCode].name}
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.autocompleteCountryCode}
                >
                  {getCallingCode(countryCode)}
                </Typography>
              </>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              autoFocus
              onBlur={() => setPopperOpen(false)}
            />
          )}
        />
      </Popper>
    </div>
  );
};

PhoneNumberInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isValid: PropTypes.func,
  helperText: PropTypes.string,
  label: PropTypes.string,
  initialCountryCode: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

PhoneNumberInput.defaultProps = {
  isValid: null,
  helperText: null,
  label: "Phone No.",
  initialCountryCode: "HK",
  disabled: false,
  required: false,
};

export default PhoneNumberInput;
