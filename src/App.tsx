import { useState } from 'react'
import './App.css'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { addOrUpdateQuery, getQueryVariable } from './utils'

function App() {

  const [lab, setLab] = useState(getQueryVariable("lab") || "LX")
  const [token, setToken] = useState("")

  const onCheck = () => {
    window.open("http://42.192.188.200:8080/check?token="+token+"&lab="+lab)
  }

  return (
    <div className='wallpaper'>
      <div className='blur-box'>
        <h2 className='title text'>快乐 OJ</h2>
        <form method='post' action='/upload' encType='multipart/form-data' style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
          <FormControl style={{ width: '200px', margin: '10px' }}>
            <InputLabel>实验序号</InputLabel>
            <Select
              value={lab}
              label="实验序号"
              onChange={(e) => {
                setLab(e.target.value)
                addOrUpdateQuery("lab", e.target.value)
              }}
              name="lab"
            >
              <MenuItem value={"LX"}>LX</MenuItem>
              <MenuItem value={"L0"}>L0</MenuItem>
              <MenuItem value={"L1"}>L1</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Token" variant='outlined' style={{ margin: '10px', width: '500px' }} name="token" value={token} onChange={(e) => setToken(e.target.value)}></TextField>
          <Button variant='outlined' color='info' style={{ margin: '20px', fontSize: 18 }}>
            <a href="javascript:;" className='file-a'>
              <label>
                选择文件
                <input className='file-inp' name='src' type="file" accept="image/*" />
              </label>
            </a>
          </Button>
          <div>
            <Button type='submit' variant='outlined' color='info' style={{ margin: '20px', fontSize: 18 }}>提交</Button>
            <Button variant='outlined' color='info' style={{ margin: '20px', fontSize: 18 }} onClick={onCheck}>查询</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
