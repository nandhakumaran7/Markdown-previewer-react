import React, { useState } from "react";
import { marked } from "marked";
import fb from '../assets/fb.png';
import gb from '../assets/gb.png';
import ig from '../assets/ig.png';
import link from '../assets/link.png';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextBlock from '../comp/textBlock';
import TextBlock2 from '../comp/textblock2';
import TextBlock3 from '../comp/testblock3';
import {Divider} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  input: {
    height: "100vh",
    width: "45vw",
    padding: theme.spacing(2),
    border: "none",
    outline: "none",
    resize: "none",
    direction: "ltr",
    textAlign: "left",
    paddingRight: "10px",
    backgroundColor: "whitesmoke"
  },
  preview: {
    height: "90vh",
    width: "42vw",
    paddingLeft: "5vw",
    padding: theme.spacing(2),
    backgroundColor: "#f5f5f5",
    border: "none",
    borderRadius: theme.spacing(1),
    overflowY: "auto",
    overflowWrap: "break-word",
    direction: "ltr",
    textAlign: "left",
  },
}));

export default function Markdown() {
  const classes = useStyles();
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text *bold*... whoa!
Or italic.
Or... wait for it... *both!*
And feel free to go crazy ~crossing stuff out~.

There's also [links](/), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.

`);

  const [isEditorOpen, setIsEditorOpen] = useState(false);

  function handleChange(event) {
    setMarkdown(event.target.value);
  }

  function toggleEditor() {
    setIsEditorOpen(!isEditorOpen);
  }

  return (
    <div style={{display:'flex',flexDirection:'column',minHeight:'100vh',backgroundColor:'gray',marginTop:'6%'}}>
      <Container maxWidth="xl" component="main" style={{backgroundColor:"whitesmoke",flexGrow:'1'}}>
        <Grid container spacing={2}>
          {isEditorOpen && (
            <>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="filled"
                  multiline
                  rows={34.5}
                  style={{display:"flex",marginRight:"60vw"}}
                  value={markdown}
                  onChange={handleChange}
                  className={classes.input}
                />
              </Grid>
              <Grid item xs={12} md={6}>
  <Box className={classes.preview} boxShadow={3}>
    <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    <Button
      variant="contained"
      color="secondary"
      onClick={toggleEditor}
      style={{ position: "absolute", top: "8px", right: "8px" }}
    >
      Close
    </Button>
  </Box>
</Grid>

            </>
          )}
        </Grid>
        {isEditorOpen ? (
  <div style={{ display: "flex", alignItems: "center",marginBottom:"8vh" }}>
    <div class="container">

<a href="#" class="button">
  <div class="button__line"></div>
  <div class="button__line"></div>
  <span class="button__text" onClick={toggleEditor}>CLOSE</span>
  <div class="button__drow1"></div>
  <div class="button__drow2"></div>
</a>

</div>
  </div>
) : (
 <div class="container">

  <a href="#" class="button">
    <div class="button__line"></div>
    <div class="button__line"></div>
    <span class="button__text" onClick={toggleEditor}>OPEN TERMINAL</span>
    <div class="button__drow1"></div>
    <div class="button__drow2"></div>
  </a>

</div>
)} 
  <Divider />
  {/* <CustomizedRating /> */}
  <div>
    <TextBlock />
    <TextBlock2 />
    <TextBlock3 />
  </div>

  <footer
  style={{
        textAlign: 'center',
        color:'white',
        backgroundColor:'black',
        marginTop:'10vh'
      }}
    >
      &copy; {new Date().getFullYear()} nandy<br></br>
      <>
      <h1>CONTACT ME:</h1>
      </>
      <div style={{display:'flex',justifyContent:'space-between',width:'30vw',marginLeft:'33vw'}} id="COC">
      <a href="https://www.facebook.com/" target="_blank"className="B1"><img src={fb} style={{height:'30px',width:'30px',textshadow: '10px 10px #ffffff'}}></img></a>
      <a href="https://github.com/nandhakumaran7" target="_blank"className="B1"><img src={gb} style={{height:'30px',width:'30px'}}></img></a>
      <a href="https://www.instagram.com/" target="_blank"className="B1"><img src={ig} style={{height:'30px',width:'30px'}}></img></a>
      <a href="https://www.linkedin.com/in/nandhakumaran-m-71810b273/" target="_blank"className="B1"><img src={link} style={{height:'30px',width:'30px'}}></img></a>
      </div>
  </footer>


      </Container>
    </div>
  );
}

