import React, {useState} from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';


 export const InputForm = ({url, onSubmit}) => {
    const [eddate, setEddate] = useState("2020-12-31");
    const [genrenm, setGenrenm] = useState("AAAA");

    const [stdate, setStdate] = useState("2018-01-01");

    //(필수)시작일, 종료일,현재페이지,페이지당 목록수
    // 그외)장르, 공연명 시설명

    const stdateChange = date => {
        Date.parse(date) ? setStdate(date.toISOString().substr(0,10)) : setStdate(null);
    }

    const eddateChange = date => {
        Date.parse(date) ? setEddate(date.toISOString().substr(0,10)) : setEddate(null);
    }

    return (
        <div>
            <form>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    margin="normal"
                    id="date-picker-dialog-stdate"
                    label="시작날짜"
                    format="yyyy-MM-dd"
                    minDate={new Date("2018-01-01")}
                    maxDate={new Date("2020-12-31")}
                    value={stdate ? new Date(stdate): null}
                    onChange={stdateChange}
                    renderInput={(params) => <TextField {...params} />}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <DatePicker
                   margin="normal"
                   id="date-picker-dialog-eddate"
                   label="종료날짜"
                   format="yyyy-MM-dd"
                   minDate={new Date("2018-01-01")}
                   maxDate={new Date("2020-12-31")}
                   value={eddate ? new Date(eddate): null}
                   onChange={eddateChange}
                   renderInput={(params) => <TextField {...params} />}
                   KeyboardButtonProps={{
                       'aria-label': 'change date',
                   }}
                />
            </LocalizationProvider>

                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog-stdate"
                            label="시작날짜"
                            format="yyyy-MM-dd"
                            minDate={new Date("2018-01-01")}
                            maxDate={new Date("2020-12-31")}
                            value={stdate ? new Date(stdate): null}
                            onChange={stdateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog-eddate"
                            label="종료날짜"
                            format="yyyy-MM-dd"
                            minDate={new Date("2018-01-01")}
                            maxDate={new Date("2020-12-31")}
                            value={eddate ? new Date(eddate): null}
                            onChange={eddateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                </MuiPickersUtilsProvider> */}
                
                {/* native input Date  */}
                {/* <input type="date" id="stdate" name="startdata"
                    min="2018-01-01" max="2020-12-31" value={stdate} onChange={ e => setStdate(e.target.value)}
                ></input>
                <input type="date" id="eddate" name="enddata"
                    min="2018-01-01" max="2020-12-31" value={eddate} onChange={ e => setEddate(e.target.value)}
                ></input> */}
                 
                    <InputLabel id="demo-simple-select-label">장르</InputLabel>
                    <Select labelId="demo-simple-select-label" name="genrenm" value={genrenm} onChange={e => setGenrenm(e.target.value)}>
                        <MenuItem value={"AAAA"}>연극</MenuItem>
                        <MenuItem value={"AAAB"}>뮤지컬</MenuItem>
                        <MenuItem value={"BBBA"}>무용</MenuItem>
                        <MenuItem value={"CCCA"}>클래식</MenuItem>
                        <MenuItem value={"CCCB"}>오페라</MenuItem>
                        <MenuItem value={"CCCC"}>국악</MenuItem>
                        <MenuItem value={"EEEA"}>복합</MenuItem>
                    </Select>
                    {/* <p>주소:</p>
                    <h4>{url}</h4>
                    <p>기간: {stdate} ~ {eddate} </p>
                    <p>장르: {genrenm} </p> */}

                    <p>
                    <Button variant="outlined" size="large"
                    onClick={() => onSubmit(setdata(stdate,eddate,genrenm))}
                    >
                        검색
                    </Button></p>
                    
            </form>
        </div>
    )
}

const setdata = (start,end,genre) =>{
    var formData = 'stdate=' + start.replace(/-/gi,'') +'&' + 
                 'eddate=' + end.replace(/-/gi,'') + '&' +
                 'shcate=' + genre
                 ;

    var result = 'http://www.kopis.or.kr/openApi/restful/pblprfr?service=06a11aff5c1a4a0fb3b8856fe545e031&rows=10&cpage=1&'+ formData
    return result
}