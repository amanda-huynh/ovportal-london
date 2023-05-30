import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { SEARCH_QUERIES } from "./SearchQueries";
import {
  Radio,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import "./ProjectMeta.css";

function ProjectMeta(props) {
  const [projectName, setProjectName] = useState("");
  const [partnerName, setPartnerName] = useState("");

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handlePartnerNameChange = (e) => {
    setPartnerName(e.target.value);
  };

  const [selectedLoginValue, setSelectedLoginValue] = useState(
    "require_daily_login"
  );
  const [selectedAudioValue, setSelectedAudioValue] = useState(
    "allow_audio_recordings"
  );
  const [selectedTextValue, setSelectedTextValue] = useState(
    "allow_text_comments"
  );
  const [selectedTagsValue, setSelectedTagsValue] =
    useState("allow_photo_tags");
  const [selectedEnglishValue, setSelectedEnglishValue] = useState(true);
  const [selectedSpanishValue, setSelectedSpanishValue] = useState(true);
  const [selectedSwedishValue, setSelectedSwedishValue] = useState(true);
  const [selectedPortugueseValue, setSelectedPortugueseValue] = useState(true);
  const [selectedChineseValue, setSelectedChineseValue] = useState(true);
  const [selectedTradChineseValue, setSelectedTradChineseValue] =
    useState(true);
  const [selectedThaiValue, setSelectedThaiValue] = useState(true);
  const [selectedArabicValue, setSelectedArabicValue] = useState(true);
  const [selectedFrenchValue, setSelectedFrenchValue] = useState(true);
  const [selectedRussianValue, setSelectedRussianValue] = useState(true);
  const [selectedDutchValue, setSelectedDutchValue] = useState(true);
  const [selectedHebrewValue, setSelectedHebrewValue] = useState(true);

  const handleEnglishChange = (e) => {
    setSelectedEnglishValue(!selectedEnglishValue);
  };

  const handleSpanishChange = (e) => {
    setSelectedSpanishValue(!selectedSpanishValue);
  };

  const handleSwedishChange = (e) => {
    setSelectedSwedishValue(!selectedSwedishValue);
  };

  const handlePortugueseChange = (e) => {
    setSelectedPortugueseValue(!selectedPortugueseValue);
  };

  const handleChineseChange = (e) => {
    setSelectedChineseValue(!selectedChineseValue);
  };

  const handleTradChineseChange = (e) => {
    setSelectedTradChineseValue(!selectedTradChineseValue);
  };

  const handleThaiChange = (e) => {
    setSelectedThaiValue(!selectedThaiValue);
  };

  const handleArabicChange = (e) => {
    setSelectedArabicValue(!selectedArabicValue);
  };

  const handleFrenchChange = (e) => {
    setSelectedFrenchValue(!selectedFrenchValue);
  };

  const handleRussianChange = (e) => {
    setSelectedRussianValue(!selectedRussianValue);
  };

  const handleDutchChange = (e) => {
    setSelectedDutchValue(!selectedDutchValue);
  };

  const handleHebrewChange = (e) => {
    setSelectedHebrewValue(!selectedHebrewValue);
  };

  const handleLoginChange = (e) => {
    setSelectedLoginValue(e.target.value);
  };

  const handleAudioChange = (e) => {
    setSelectedAudioValue(e.target.value);
  };

  const handleTextChange = (e) => {
    setSelectedTextValue(e.target.value);
  };

  const handleTagsChange = (e) => {
    setSelectedTagsValue(e.target.value);
  };

  //   const [filteredCards, setFilteredCards] = React.useState(SEARCH_QUERIES);
//   const [searchQueries, setSearchQueries] = React.useState(SEARCH_QUERIES);
  const handleCreateProject = () => {
    // const newProject = {
    //   project_id: `project-${SEARCH_QUERIES.length + 1}`,
    //   project_name: projectName,
    //   partner_name: partnerName,
    //   project_total_walks: "0",
    //   project_total_images: "0",
    //   project_data_processed_count: "0/5",
    // };
  
    // // Append the new project to the searchQueries array
    // const updatedSearchQueries = [...SEARCH_QUERIES, newProject];
    // // setSearchQueries(updatedSearchQueries);
  
    window.location.href = "/projects";
  };

  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7"></div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Project Meta</h1>
            <div className="ProjectMeta-disabled">
              <TextField
                className="ProjectMeta-textfield"
                disabled
                id="project_password"
                label="Project Password"
                aria-describedby="project-password"
                defaultValue="1234"
              />{" "}
              <br /> <br />
              <TextField
                className="ProjectMeta-textfield"
                disabled
                id="portal_password"
                label="Portal Password"
                aria-describedby="portal-password"
                defaultValue="1234"
              />{" "}
              <br /> <br />
              <TextField
                className="ProjectMeta-textfield"
                disabled
                id="admin_email"
                label="Admin Email"
                aria-describedby="admin-email"
                defaultValue="banchoff@stanford.edu"
              />{" "}
            </div>{" "}
            <br />
            <div className="ProjectMeta-project">
              <TextField
                className="ProjectMeta-textfield"
                id="project_id"
                label="Project ID"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="outlined"
              />{" "}
              <br /> <br />
              <TextField
                className="ProjectMeta-textfield"
                id="project_name"
                label="Project Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="outlined"
                value={projectName}
                onChange={handleProjectNameChange}
              />
              <br /> <br />
              <TextField
                className="ProjectMeta-textfield"
                id="partner_name"
                label="Partner Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                value={partnerName}
                onChange={handlePartnerNameChange}
              />{" "}
            </div>{" "}
            <br />
            <div className="ProjectMeta-logistics">
              <TextField
                className="ProjectMeta-textfield"
                id="project_expiry_date"
                label="Project Expiration Date"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="outlined"
              />{" "}
              <br /> <br />
              <TextField
                className="ProjectMeta-textfield"
                id="take_photo_app_text"
                label="'Take Photo' App Text"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="outlined"
              />{" "}
            </div>
            <br />
            <table>
              <tr>
                <td>
                  <Typography
                    variant="body1"
                    className="ProjectMeta-text"
                    component="span"
                  >
                    Login Settings:
                  </Typography>
                </td>
                <td>
                  <FormControlLabel
                    value="require_daily_login"
                    control={<Radio />}
                    label="Require Daily Login"
                    checked={selectedLoginValue === "require_daily_login"}
                    onChange={handleLoginChange}
                  />
                </td>
                <td>
                  <FormControlLabel
                    value="keep_user_logged_in"
                    control={<Radio />}
                    label="Keep User Logged In"
                    checked={selectedLoginValue === "keep_user_logged_in"}
                    onChange={handleLoginChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Typography
                    variant="body1"
                    className="ProjectMeta-text"
                    component="span"
                  >
                    Audio Comments:
                  </Typography>
                </td>
                <td>
                  <FormControlLabel
                    value="allow_audio_recordings"
                    control={<Radio />}
                    label="Allow Audio Recordings"
                    checked={selectedAudioValue === "allow_audio_recordings"}
                    onChange={handleAudioChange}
                  />
                </td>
                <td>
                  <FormControlLabel
                    value="do_not_allow_audio_recordings"
                    control={<Radio />}
                    label="Do Not Allow Audio Recordings"
                    checked={
                      selectedAudioValue === "do_not_allow_audio_recordings"
                    }
                    onChange={handleAudioChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Typography
                    variant="body1"
                    className="ProjectMeta-text"
                    component="span"
                  >
                    Text Comments:
                  </Typography>
                </td>
                <td>
                  <FormControlLabel
                    value="allow_text_comments"
                    control={<Radio />}
                    label="Allow Text Comments"
                    checked={selectedTextValue === "allow_text_comments"}
                    onChange={handleTextChange}
                  />
                </td>
                <td>
                  <FormControlLabel
                    value="do_not_allow_text_comments"
                    control={<Radio />}
                    label="Do Not Allow Text Comments"
                    checked={selectedTextValue === "do_not_allow_text_comments"}
                    onChange={handleTextChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Typography
                    variant="body1"
                    className="ProjectMeta-text"
                    component="span"
                  >
                    Photo Tags:
                  </Typography>
                </td>
                <td>
                  <FormControlLabel
                    value="allow_photo_tags"
                    control={<Radio />}
                    label="Allow Photo Tags"
                    checked={selectedTagsValue === "allow_photo_tags"}
                    onChange={handleTagsChange}
                  />
                </td>
                <td>
                  <FormControlLabel
                    value="do_not_allow_photo_tags"
                    control={<Radio />}
                    label="Do Not Allow Photo Tags"
                    checked={selectedTagsValue === "do_not_allow_photo_tags"}
                    onChange={handleTagsChange}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <Typography
                    variant="body1"
                    className="ProjectMeta-text"
                    component="span"
                  >
                    Languages:
                  </Typography>
                </td>
                <td>
                  <FormControlLabel
                    value="english"
                    control={<Checkbox />}
                    label="English"
                    checked={selectedEnglishValue}
                    onChange={handleEnglishChange}
                  />
                </td>
                <td>
                  <FormControlLabel
                    value="spanish"
                    control={<Checkbox />}
                    label="Spanish"
                    checked={selectedSpanishValue}
                    onChange={handleSpanishChange}
                  />
                </td>
                <td>
                  <FormControlLabel
                    value="portuguese"
                    control={<Checkbox />}
                    label="Portuguese"
                    checked={selectedPortugueseValue}
                    onChange={handlePortugueseChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <FormControlLabel
                    value="chinese"
                    control={<Checkbox />}
                    label="Chinese"
                    checked={selectedChineseValue}
                    onChange={handleChineseChange}
                  />
                </td>
                <td>
                  <FormControlLabel
                    value="trad_chinese"
                    control={<Checkbox />}
                    label="Trad. Chinese"
                    checked={selectedTradChineseValue}
                    onChange={handleTradChineseChange}
                  />
                </td>
                <td>
                  <FormControlLabel
                    value="thai"
                    control={<Checkbox />}
                    label="Thai"
                    checked={selectedThaiValue}
                    onChange={handleThaiChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <FormControlLabel
                    value="arabic"
                    control={<Checkbox />}
                    label="Arabic"
                    checked={selectedArabicValue}
                    onChange={handleArabicChange}
                  />
                </td>
                <td>
                  <FormControlLabel
                    value="french"
                    control={<Checkbox />}
                    label="French"
                    checked={selectedFrenchValue}
                    onChange={handleFrenchChange}
                  />
                </td>
                <td>
                  <FormControlLabel
                    value="russian"
                    control={<Checkbox />}
                    label="Russian"
                    checked={selectedRussianValue}
                    onChange={handleRussianChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <FormControlLabel
                    value="swedish"
                    control={<Checkbox />}
                    label="Swedish"
                    checked={selectedSwedishValue}
                    onChange={handleSwedishChange}
                  />
                </td>
                <td>
                  <FormControlLabel
                    value="dutch"
                    control={<Checkbox />}
                    label="Dutch"
                    checked={selectedDutchValue}
                    onChange={handleDutchChange}
                  />
                </td>
                <td>
                  <FormControlLabel
                    value="hebrew"
                    control={<Checkbox />}
                    label="Hebrew"
                    checked={selectedHebrewValue}
                    onChange={handleHebrewChange}
                  />
                </td>
              </tr>
            </table>
            <br /> <br />
            <button
              className="ProjectMeta-create"
              onClick={handleCreateProject}
            >
              Create Project
            </button>
            <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectMeta;
