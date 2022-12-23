import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {E, updateState} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Box, Button, Center, Grid, GridItem, HStack, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack} from "@chakra-ui/react"
import {HexColorPicker} from "react-colorful"
import NextHead from "next/head"

const EVENT = "http://localhost:8000/event"
export default function Component() {
const [state, setState] = useState({"color_indices": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "colors": ["#333333", "#FF8811", "#1188FF", "#FFFFFF"], "colors_view": ["#FF8811", "#1188FF", "#FFFFFF"], "new_color": "white", "events": [{"name": "state.hydrate"}]})
const [result, setResult] = useState({"state": null, "events": [], "processing": false})
const router = useRouter()
const Event = events => setState({
  ...state,
  events: [...state.events, ...events],
})
useEffect(() => {
  const update = async () => {
    if (result.state != null) {
      setState({
        ...result.state,
        events: [...state.events, ...result.events],
      })
      setResult({
        state: null,
        events: [],
        processing: false,
      })
    }
    await updateState(state, result, setResult, EVENT, router)
  }
  update()
})
return (
<Center>
<HStack spacing="5vw"
sx={{"height": "100vh"}}>
<VStack>
<Heading>
{`Add Color`}</Heading>
<VStack>
<HexColorPicker color={state.new_color}
onChange={(_e) => Event([E("state.set_new_color", {value:_e})])}/>
<Button onClick={() => Event([E("state.add_color", {})])}>
{`Add`}</Button></VStack></VStack>
<VStack>
<Heading>
{`Colors`}</Heading>
<VStack>
{state.colors_view.map((ofdmebje, i) => <HStack key={i}>
<Box sx={{"bg": ofdmebje, "width": "4em", "height": "4em", "border": "0px", "borderRadius": "4px", "margin": "4px", "boxShadow": "0px 0px 4px 0px rgba(0,0,0,0.75)"}}/>
<Button onClick={() => Event([E("state.delete_color", {color:ofdmebje})])}
sx={{"bg": "red", "color": "white"}}>
{`X`}</Button></HStack>)}</VStack></VStack>
<VStack>
<Heading>
{`Board Control`}</Heading>
<Grid templateRows="repeat(8, 1fr)"
templateColumns="repeat(8, 1fr)"
sx={{"gap": 4}}>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[0]}
onChange={(_e) => Event([E("state.set_index", {index:0,value:_e})])}
sx={{"bg": state.colors[state.color_indices[0]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[1]}
onChange={(_e) => Event([E("state.set_index", {index:1,value:_e})])}
sx={{"bg": state.colors[state.color_indices[1]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[2]}
onChange={(_e) => Event([E("state.set_index", {index:2,value:_e})])}
sx={{"bg": state.colors[state.color_indices[2]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[3]}
onChange={(_e) => Event([E("state.set_index", {index:3,value:_e})])}
sx={{"bg": state.colors[state.color_indices[3]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[4]}
onChange={(_e) => Event([E("state.set_index", {index:4,value:_e})])}
sx={{"bg": state.colors[state.color_indices[4]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[5]}
onChange={(_e) => Event([E("state.set_index", {index:5,value:_e})])}
sx={{"bg": state.colors[state.color_indices[5]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[6]}
onChange={(_e) => Event([E("state.set_index", {index:6,value:_e})])}
sx={{"bg": state.colors[state.color_indices[6]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[7]}
onChange={(_e) => Event([E("state.set_index", {index:7,value:_e})])}
sx={{"bg": state.colors[state.color_indices[7]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[8]}
onChange={(_e) => Event([E("state.set_index", {index:8,value:_e})])}
sx={{"bg": state.colors[state.color_indices[8]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[9]}
onChange={(_e) => Event([E("state.set_index", {index:9,value:_e})])}
sx={{"bg": state.colors[state.color_indices[9]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[10]}
onChange={(_e) => Event([E("state.set_index", {index:10,value:_e})])}
sx={{"bg": state.colors[state.color_indices[10]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[11]}
onChange={(_e) => Event([E("state.set_index", {index:11,value:_e})])}
sx={{"bg": state.colors[state.color_indices[11]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[12]}
onChange={(_e) => Event([E("state.set_index", {index:12,value:_e})])}
sx={{"bg": state.colors[state.color_indices[12]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[13]}
onChange={(_e) => Event([E("state.set_index", {index:13,value:_e})])}
sx={{"bg": state.colors[state.color_indices[13]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[14]}
onChange={(_e) => Event([E("state.set_index", {index:14,value:_e})])}
sx={{"bg": state.colors[state.color_indices[14]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[15]}
onChange={(_e) => Event([E("state.set_index", {index:15,value:_e})])}
sx={{"bg": state.colors[state.color_indices[15]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[16]}
onChange={(_e) => Event([E("state.set_index", {index:16,value:_e})])}
sx={{"bg": state.colors[state.color_indices[16]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[17]}
onChange={(_e) => Event([E("state.set_index", {index:17,value:_e})])}
sx={{"bg": state.colors[state.color_indices[17]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[18]}
onChange={(_e) => Event([E("state.set_index", {index:18,value:_e})])}
sx={{"bg": state.colors[state.color_indices[18]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[19]}
onChange={(_e) => Event([E("state.set_index", {index:19,value:_e})])}
sx={{"bg": state.colors[state.color_indices[19]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[20]}
onChange={(_e) => Event([E("state.set_index", {index:20,value:_e})])}
sx={{"bg": state.colors[state.color_indices[20]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[21]}
onChange={(_e) => Event([E("state.set_index", {index:21,value:_e})])}
sx={{"bg": state.colors[state.color_indices[21]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[22]}
onChange={(_e) => Event([E("state.set_index", {index:22,value:_e})])}
sx={{"bg": state.colors[state.color_indices[22]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[23]}
onChange={(_e) => Event([E("state.set_index", {index:23,value:_e})])}
sx={{"bg": state.colors[state.color_indices[23]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[24]}
onChange={(_e) => Event([E("state.set_index", {index:24,value:_e})])}
sx={{"bg": state.colors[state.color_indices[24]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[25]}
onChange={(_e) => Event([E("state.set_index", {index:25,value:_e})])}
sx={{"bg": state.colors[state.color_indices[25]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[26]}
onChange={(_e) => Event([E("state.set_index", {index:26,value:_e})])}
sx={{"bg": state.colors[state.color_indices[26]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[27]}
onChange={(_e) => Event([E("state.set_index", {index:27,value:_e})])}
sx={{"bg": state.colors[state.color_indices[27]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[28]}
onChange={(_e) => Event([E("state.set_index", {index:28,value:_e})])}
sx={{"bg": state.colors[state.color_indices[28]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[29]}
onChange={(_e) => Event([E("state.set_index", {index:29,value:_e})])}
sx={{"bg": state.colors[state.color_indices[29]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[30]}
onChange={(_e) => Event([E("state.set_index", {index:30,value:_e})])}
sx={{"bg": state.colors[state.color_indices[30]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[31]}
onChange={(_e) => Event([E("state.set_index", {index:31,value:_e})])}
sx={{"bg": state.colors[state.color_indices[31]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[32]}
onChange={(_e) => Event([E("state.set_index", {index:32,value:_e})])}
sx={{"bg": state.colors[state.color_indices[32]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[33]}
onChange={(_e) => Event([E("state.set_index", {index:33,value:_e})])}
sx={{"bg": state.colors[state.color_indices[33]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[34]}
onChange={(_e) => Event([E("state.set_index", {index:34,value:_e})])}
sx={{"bg": state.colors[state.color_indices[34]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[35]}
onChange={(_e) => Event([E("state.set_index", {index:35,value:_e})])}
sx={{"bg": state.colors[state.color_indices[35]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[36]}
onChange={(_e) => Event([E("state.set_index", {index:36,value:_e})])}
sx={{"bg": state.colors[state.color_indices[36]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[37]}
onChange={(_e) => Event([E("state.set_index", {index:37,value:_e})])}
sx={{"bg": state.colors[state.color_indices[37]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[38]}
onChange={(_e) => Event([E("state.set_index", {index:38,value:_e})])}
sx={{"bg": state.colors[state.color_indices[38]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[39]}
onChange={(_e) => Event([E("state.set_index", {index:39,value:_e})])}
sx={{"bg": state.colors[state.color_indices[39]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[40]}
onChange={(_e) => Event([E("state.set_index", {index:40,value:_e})])}
sx={{"bg": state.colors[state.color_indices[40]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[41]}
onChange={(_e) => Event([E("state.set_index", {index:41,value:_e})])}
sx={{"bg": state.colors[state.color_indices[41]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[42]}
onChange={(_e) => Event([E("state.set_index", {index:42,value:_e})])}
sx={{"bg": state.colors[state.color_indices[42]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[43]}
onChange={(_e) => Event([E("state.set_index", {index:43,value:_e})])}
sx={{"bg": state.colors[state.color_indices[43]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[44]}
onChange={(_e) => Event([E("state.set_index", {index:44,value:_e})])}
sx={{"bg": state.colors[state.color_indices[44]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[45]}
onChange={(_e) => Event([E("state.set_index", {index:45,value:_e})])}
sx={{"bg": state.colors[state.color_indices[45]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[46]}
onChange={(_e) => Event([E("state.set_index", {index:46,value:_e})])}
sx={{"bg": state.colors[state.color_indices[46]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[47]}
onChange={(_e) => Event([E("state.set_index", {index:47,value:_e})])}
sx={{"bg": state.colors[state.color_indices[47]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[48]}
onChange={(_e) => Event([E("state.set_index", {index:48,value:_e})])}
sx={{"bg": state.colors[state.color_indices[48]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[49]}
onChange={(_e) => Event([E("state.set_index", {index:49,value:_e})])}
sx={{"bg": state.colors[state.color_indices[49]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[50]}
onChange={(_e) => Event([E("state.set_index", {index:50,value:_e})])}
sx={{"bg": state.colors[state.color_indices[50]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[51]}
onChange={(_e) => Event([E("state.set_index", {index:51,value:_e})])}
sx={{"bg": state.colors[state.color_indices[51]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[52]}
onChange={(_e) => Event([E("state.set_index", {index:52,value:_e})])}
sx={{"bg": state.colors[state.color_indices[52]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[53]}
onChange={(_e) => Event([E("state.set_index", {index:53,value:_e})])}
sx={{"bg": state.colors[state.color_indices[53]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[54]}
onChange={(_e) => Event([E("state.set_index", {index:54,value:_e})])}
sx={{"bg": state.colors[state.color_indices[54]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[55]}
onChange={(_e) => Event([E("state.set_index", {index:55,value:_e})])}
sx={{"bg": state.colors[state.color_indices[55]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[56]}
onChange={(_e) => Event([E("state.set_index", {index:56,value:_e})])}
sx={{"bg": state.colors[state.color_indices[56]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[57]}
onChange={(_e) => Event([E("state.set_index", {index:57,value:_e})])}
sx={{"bg": state.colors[state.color_indices[57]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[58]}
onChange={(_e) => Event([E("state.set_index", {index:58,value:_e})])}
sx={{"bg": state.colors[state.color_indices[58]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[59]}
onChange={(_e) => Event([E("state.set_index", {index:59,value:_e})])}
sx={{"bg": state.colors[state.color_indices[59]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[60]}
onChange={(_e) => Event([E("state.set_index", {index:60,value:_e})])}
sx={{"bg": state.colors[state.color_indices[60]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[61]}
onChange={(_e) => Event([E("state.set_index", {index:61,value:_e})])}
sx={{"bg": state.colors[state.color_indices[61]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[62]}
onChange={(_e) => Event([E("state.set_index", {index:62,value:_e})])}
sx={{"bg": state.colors[state.color_indices[62]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem>
<GridItem rowSpan={1}
colSpan={1}
sx={{"width": "4em"}}>
<NumberInput value={state.color_indices[63]}
onChange={(_e) => Event([E("state.set_index", {index:63,value:_e})])}
sx={{"bg": state.colors[state.color_indices[63]]}}>
<NumberInputField/>
<NumberInputStepper>
<NumberIncrementStepper/>
<NumberDecrementStepper/></NumberInputStepper></NumberInput></GridItem></Grid></VStack>
<VStack>
<Button onClick={() => Event([E("state.save_colors", {})])}
sx={{"bg": "#1188FF", "fontSize": "3em", "padding": "1em"}}>
{`Save`}</Button>
<Button onClick={() => Event([E("state.reset", {})])}
sx={{"fontSize": "2em", "padding": "1em"}}>
{`Reset`}</Button></VStack></HStack>
<NextHead>
<title>{`Kilter Board Control`}</title>
<meta content="A Pynecone app."
name="description"/>
<meta property="og:image"
content="favicon.ico"/></NextHead></Center>
)
}