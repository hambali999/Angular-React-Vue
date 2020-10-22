import React, { useState } from "react";
import Loader from './Loader';
import Complete from './Complete';
import styled from "styled-components";

const FormStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
  padding: 5px 20px;
  textarea {
    resize: none;
  }
  @media (max-width: 770px) {
    width: 90%;
    padding: 0px;
  }
  input,
  select,
  textarea {
    position: relative;
    border: 0;
    border-radius: 0;
    outline: none;
    background: transparent;
    box-shadow: 0px 3px 1.5px -1.5px #5ec7f3;
    -webkit-appearance: none;
    -webkit-box-shadow: 0px 3px 1.5px -1.5px #5ec7f3;
    -moz-box-shadow: 0px 3px 1.5px -1.5px #5ec7f3;
  }
  input:focus,
  textarea:focus {
    box-shadow: #5ec7f3 0px 0px 0px 1.5px;
    -webkit-appearance: none;
    -webkit-box-shadow: #5ec7f3 0px 0px 0px 1.5px;
    -moz-box-shadow: #5ec7f3 0px 0px 0px 1.5px;
    border: 0;
  }
  .error input,
  .error select,
  .error textarea{
    box-shadow: 0px 3px 1.5px -1.5px #fb745e;
    -webkit-appearance: none;
    -webkit-box-shadow: 0px 3px 1.5px -1.5px #fb745e;
    -moz-box-shadow: 0px 3px 1.5px -1.5px #fb745e;
  }
  .error:focus-within input,
  .error:focus-within textarea{
    box-shadow: 0px 0px 0px 1.5px #fb745e;
    -webkit-appearance: none;
    -webkit-box-shadow: 0px 0px 0px 1.5px #fb745e;
    -moz-box-shadow: 0px 0px 0px 1.5px #fb745e;
    border: 0;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  margin: 0;
  transition: 0.25s ease;
  position: relative;
  &:before {
    content: "";
    top: 5px;
    left: 12px;
    color: #6c757d;
    position: absolute;
    transition: 0.3s ease;
  }
  &.error{
    margin-bottom: 17px;
  }
  &.Job-Title:before {
    content: "Job Title";
  }
  &.Name:before {
    content: "Name";
  }
  &.Address:before {
    content: "Address";
  }
  &.Linkedin:before {
    content: "Linkedin";
  }
  &.Github:before {
    content: "Github";
  }
  &.Email:before {
    content: "Email";
  }
  &.Phone:before {
    content: "Phone Number";
  }
  &.Team-idea:before{
    content: "Idea";
  }
  &.Team-name:before{
    content: "Team name";
  }
  &.Team-no:before{
    content: "Members no";
  }
  &.filled:before {
    top: -11px;
    left: 3px;
    font-size: 0.7rem;
    padding: 0 2px;
    background: rgba(255, 255, 255, 0.8);
    z-index: 2;
  }
  &.filled input {
    border: 0;
    box-shadow: #5ec7f3 0px 0px 0px 1.5px inset;
    -webkit-appearance: none;
    -webkit-box-shadow: #5ec7f3 0px 0px 0px 1.5px inset;
    -moz-box-shadow: #5ec7f3 0px 0px 0px 1.5px inset;
  }
  &.filled.error input {
    border: 0;
    box-shadow: #fb745e 0px 0px 0px 1.5px inset;
    -webkit-appearance: none;
    -webkit-box-shadow: 0px 0px 0px 1.5px #fb745e inset;
    -moz-box-shadow: 0px 0px 0px 1.5px #fb745e inset;
  }
  &.error:after{
    content: "Required";
    bottom: -22px;
    left: 2px;
    color: #fb745e;
    font-size: 0.8rem;
    position: absolute;
  }
  &.error.format:after{
    content: "Required or Wrong format";
  }
  &.error.no:after{
    content: "Must be a number from 2 to 5";
  }
  &:focus-within {
    &:before {
      top: -11px;
      left: 3px;
      font-size: 0.7rem;
      background: rgba(255, 255, 255, 0.8);
      padding: 0 2px;
      z-index: 3;
    }
    &.Job-Title:before {
      content: "Job Title";
    }
    &.Name:before {
      content: "Name";
    }
    &.Address:before {
      content: "Address";
    }
    &.Linkedin:before {
      content: "Linkedin";
    }
    &.Github:before {
      content: "Github";
    }
    &.Email:before {
      content: "Email";
    }
    &.Phone:before {
      content: "Phone Number";
    }
    &.Team-idea:before{
      content: "Idea";
    }
    &.Team-name:before{
      content: "Team name";
    }
    &.Team-no:before{
      content: "Members no";
    }
  }
}
`;

const StartButton = styled.button`
  background-color: #986798;
  color: #fff;
  min-width: 120px;
  padding: 10px 20px;
  margin: 5px auto;
  boder-radius: 8px;
  font-weight: 400;
  transition: 0.25 ease;

  &:hover {
    color: #986798;
    box-shadow: #986798 0px 0px 0px 2px inset;
    -webkit-appearance: none;
    -webkit-box-shadow: #986798 0px 0px 0px 2px inset;
    -moz-box-shadow: #986798 0px 0px 0px 2px inset;
    background: #fff;
  }
`;

const Button = styled.button`
  background-color: #2e4050;
  color: #fff;
  font-weight: 400;
  min-width: 120px;
  padding: 10px 20px;
  transition: 0.25 ease;
  boder-radius: 8px;
  &:hover {
    color: #2e4050;
    box-shadow: #2e4050 0px 0px 0px 2px inset;
    -webkit-appearance: none;
    -webkit-box-shadow: #2e4050 0px 0px 0px 2px inset;
    -moz-box-shadow: #2e4050 0px 0px 0px 2px inset;
    background: #fff;
  }
`;

const Title = styled.h3`
  color: #000;
  width: 100%;
  overflow: hidden;
  text-align: center;
  margin: 5px;
  min-height: 20px;
`;

const FormGroup = styled.div`
  width: 100%;
  margin: 5px 0px;
`;
const RowHalf = styled.div`
  display: inline-block;
  width: 48%;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  margin: 15px 0;
  justify-content: space-between;
  align-items: center;
`;

const scriptURL = 'https://script.google.com/macros/s/AKfycbz4dMgebDGCANYVAV8C3mmZ4KpYFLCDdlpjx-e9GdB6RjTvfS17/exec'

const members_empty = [
  {
    id: 0,
    name: "",
    gender: "",
    phone: "",
    address: "",
    email: "",
    jobtitle: "",
    teamrole: "",
    linkedin: "",
    github: "",
  },
  {
    id: 1,
    name: "",
    gender: "",
    phone: "",
    address: "",
    email: "",
    jobtitle: "",
    teamrole: "",
    linkedin: "",
    github: "",
  },
  {
    id: 2,
    name: "",
    gender: "",
    phone: "",
    address: "",
    email: "",
    jobtitle: "",
    teamrole: "",
    linkedin: "",
    github: "",
  },
  {
    id: 3,
    name: "",
    gender: "",
    phone: "",
    address: "",
    email: "",
    jobtitle: "",
    teamrole: "",
    linkedin: "",
    github: "",
  },
  {
    id: 4,
    name: "",
    gender: "",
    phone: "",
    address: "",
    email: "",
    jobtitle: "",
    teamrole: "",
    linkedin: "",
    github: "",
  },
];

const Form = (props) => {

  const [errorTeam, seterrorTeam] = useState({name: false, idea: false, no: false});
  const [isLoading, setisLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);
  const [isComplete, setisComplete] = useState(false);
  const [errorMembers, seterrorMembers] = useState({
    name: false,
    gender: false,
    phone: false,
    address: false,
    email: false,
    jobtitle: false,
    teamrole: false,
    linkedin: false,
    github: false,
  });

  const [team, setteam] = useState({ name: "", idea: "", no: 2});
  const [members, setMembers] = useState(members_empty);

  const startBtn = (e) =>
  {
    seterrorTeam({name: !team.name, idea: !team.idea, no: !(team.no>=2 && team.no<=5)})
    if(team.name && team.idea && team.no && (team.no>=2 && team.no<=5))
    {
      setStart(true);
      setIndex(0);
    }
  }
  const next = (e) =>
  {
    const phone_val = /^\d{10,14}$/i.test(members[index].phone.trim());
    const email_val = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(members[index].email.trim()));
    const linkedin_val = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i.test(members[index].linkedin.trim()) ;
    const github_val = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i.test(members[index].github.trim());

    seterrorMembers(
      {
        name: !members[index].name,
        gender: !members[index].gender,
        phone: !members[index].phone || !phone_val,
        address: !members[index].address,
        email: !members[index].email ,
        email_format: !email_val ,
        jobtitle: !members[index].jobtitle,
        teamrole: !members[index].teamrole,
        linkedin: !members[index].linkedin || !linkedin_val,
        github: !members[index].github || !github_val,
      }
    )

    if(
      members[index].name &&
      members[index].gender &&
      members[index].phone &&
      members[index].address &&
      members[index].email &&
      members[index].jobtitle &&
      members[index].teamrole &&
      members[index].linkedin &&
      members[index].github &&
      phone_val &&
      email_val &&
      linkedin_val &&
      github_val

    )
    setIndex(index >= team.no - 1 ? index : index + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone_val = /^\d{10,14}$/i.test(members[index].phone.trim());
    const email_val = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(members[index].email.trim()));
    const linkedin_val = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i.test(members[index].linkedin.trim()) ;
    const github_val = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i.test(members[index].github.trim());
    seterrorMembers(
      {
        name: !members[index].name,
        gender: !members[index].gender,
        phone: !members[index].phone || !phone_val,
        address: !members[index].address,
        email: !members[index].email ,
        email_format: !email_val ,
        jobtitle: !members[index].jobtitle,
        teamrole: !members[index].teamrole,
        linkedin: !members[index].linkedin || !linkedin_val,
        github: !members[index].github || !github_val,
      }
    )

      if(
        members[index].name &&
        members[index].gender &&
        members[index].phone &&
        members[index].address &&
        members[index].email &&
        members[index].jobtitle &&
        members[index].teamrole &&
        members[index].linkedin &&
        members[index].github &&
        phone_val &&
        email_val &&
        linkedin_val &&
        github_val
      )
      {
        setisLoading(true);
        const form = document.forms['submit-to-google-sheet']
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => setisComplete(team.name))
        .catch(error => setisComplete('Error'))
        .then( res => {
          setStart(false);
          setIndex(0);
          setteam({
            name: "",
            idea: "",
            no: 2,
          });
          setMembers(members_empty);
          setisLoading(false);
        }
        )
      }
  }

  if(isLoading)
  {
    return(
    <Loader />)
  }
  if(isComplete)
  {
    return(
    <Complete status={isComplete} />)
  }

  if (start) {
    return (
      <FormStyle>
        <Row>
          <Title>
            {
              `${
                members[index].teamrole === "Others" || !members[index].teamrole
                  ? `Member ${index + 1}`
                  : members[index].teamrole
              }${ members[index].name &&  `. ${members[index].name.split(' ')[0]}`}`
            }
          </Title>
        </Row>
        <FormGroup>
          <Row>
            <InputContainer
              className={(errorMembers.name ? members[index].name ? "error filled Name" :"error Name" : members[index].name ? "filled Name" :  "Name")}
            >
              <input
                type="text"
                value={members[index].name}
                onChange={(e) =>
                  setMembers(
                    members.map((m) =>
                      m.id === index
                        ? {
                            ...m,
                            name: e.target.value.trimStart(),
                          }
                        : m
                    )
                  )
                }
                className="form-control"
                autoComplete="name"
              />
            </InputContainer>
          </Row>
          <Row>
            <InputContainer
              className={ (errorMembers.phone ? members[index].phone? "error filled Phone" : "error Phone" : members[index].phone? "filled Phone": "Phone")}
              style={{ width: "60%", display: "inline-block" }}
              >
            <input
              type="tel"
              maxLength="14"
              value={members[index].phone}
              onChange={(e) =>
                {
                  if(!isNaN(Number(e.target.value.trimStart())))
                  setMembers(
                  members.map((m) =>
                    m.id === index
                      ? {
                          ...m,
                          phone: e.target.value.trimStart(),
                        }
                      : m
                  )
                )}
              }
              autoComplete="tel"
              className="form-control"
            />
            </InputContainer>
            <InputContainer
            className= {((errorMembers.gender && !members[index].gender) ? "error" : "")}
            style={{ width: "37%", display: "inline-block" }}
            >
              <select
              className="form-control"
                name=""
                value={members[index].gender}
                onChange={(e) =>
                  setMembers(
                    members.map((m) =>
                      m.id === index
                        ? {
                            ...m,
                            gender: e.target.value.trimStart(),
                          }
                          : m
                        )
                      )
                    }
                    >
                    <option value="" disabled>
                    Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
            </InputContainer>
          </Row>
          <Row>
            <InputContainer
              className={(errorMembers.address ? members[index].address ? "error filled Address" : "error Address" : members[index].address ? "filled Address" :  "Address")}
            >
              <input
                type="text"
                value={members[index].address}
                onChange={(e) =>
                  setMembers(
                    members.map((m) =>
                      m.id === index
                        ? {
                            ...m,
                            address: e.target.value.trimStart(),
                          }
                        : m
                    )
                  )
                }
                className="form-control"
                autoComplete="address"
              />
            </InputContainer>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <InputContainer
              className={
              members[index].email && !errorMembers.email_format ? "filled Email" :
              members[index].email && errorMembers.email_format ? "format  error filled Email" :
              errorMembers.email_format ? "format error Email" :
              errorMembers.email ? "error Email" : "Email"}
            >
              <input
                type="email"
                value={members[index].email}
                onChange={(e) =>{
                  setMembers(
                    members.map((m) =>
                      m.id === index
                        ? {
                            ...m,
                            email: e.target.value.trimStart(),
                          }
                        : m
                    )
                  )}
                }
                className="form-control"
                autoComplete="email"
              />
            </InputContainer>
          </Row>
          <Row>
            <RowHalf>
              <InputContainer
                className={
                  (errorMembers.jobtitle ? members[index].jobtitle ? "error filled Job-Title" : "error Job-Title" : members[index].jobtitle ? "filled Job-Title" :  "Job-Title")
                }
              >
                <input
                  type="text"
                  value={members[index].jobtitle}
                  onChange={(e) =>
                    setMembers(
                      members.map((m) =>
                        m.id === index
                          ? {
                              ...m,
                              jobtitle: e.target.value.trimStart(),
                            }
                          : m
                      )
                    )
                  }
                  className="form-control"
                />
              </InputContainer>
            </RowHalf>
            <RowHalf>
              <InputContainer
              className= {(errorMembers.teamrole ? "error" : "")}

              >
              <select
                className="form-control"
                name=""
                value={members[index].teamrole}
                onChange={(e) =>
                  setMembers(
                    members.map((m) =>
                      m.id === index
                        ? {
                            ...m,
                            teamrole: e.target.value.trimStart(),
                          }
                        : m
                    )
                  )
                }
              >
                <option value="" disabled>
                  Team role
                </option>
                <option value="Business Dev">Business Dev</option>
                <option value="Software Dev">Software Dev</option>
                <option value="Product Dev">Product Dev</option>
                <option value="Data People">Data People</option>
                <option value="Designers">Designers</option>
                <option value="Others">Others</option>
              </select>
              </InputContainer>
            </RowHalf>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <InputContainer
              className={
                (errorMembers.linkedin ? members[index].linkedin ? "error format filled Linkedin" : "error format Linkedin" : members[index].linkedin ? "filled Linkedin" :  "Linkedin")
              }
            >
              <input
                type="url"
                value={members[index].linkedin}
                onChange={(e) =>
                  setMembers(
                    members.map((m) =>
                      m.id === index
                        ? {
                            ...m,
                            linkedin: e.target.value.trimStart(),
                          }
                        : m
                    )
                  )
                }
                className="form-control"
                autoComplete="url"
              />
            </InputContainer>
          </Row>
          <Row>
            <InputContainer
              className={(errorMembers.github ? members[index].github ? "error format filled Github" : "error format Github" : members[index].github ? "filled Github" :  "Github")}
            >
              <input
                type="url"
                value={members[index].github}
                onChange={(e) =>
                  setMembers(
                    members.map((m) =>
                      m.id === index
                        ? {
                            ...m,
                            github: e.target.value.trimStart(),
                          }
                        : m
                    )
                  )
                }
                className="form-control"
                autoComplete="url"
              />
            </InputContainer>
          </Row>
        </FormGroup>
        <Row>
          {
            <Button className="btn" onClick={(e) => setIndex(index > 0 ? index - 1 : setStart(false))}>
              back
            </Button>
          }
          {
            !(team.no-1-index) &&
            <form name='submit-to-google-sheet' onSubmit={e => handleSubmit(e)}>
              <input type='text' style={{display: "none"}} value={JSON.stringify(members[0])} name="member1" />
              <input type='text' style={{display: "none"}} value={JSON.stringify(members[1])} name="member2" />
              <input type='text' style={{display: "none"}} value={JSON.stringify(members[2].name? members[2] : "")} name="member3" />
              <input type='text' style={{display: "none"}} value={JSON.stringify(members[3].name? members[3] : "")} name="member4" />
              <input type='text' style={{display: "none"}} value={JSON.stringify(members[4].name? members[4] : "")} name="member5" />
              <input type='text' style={{display: "none"}} value={team.name.trim()} name="team name" />
              <input type='text' style={{display: "none"}} value={team.idea.trim()} name="team idea" />
              <input type='text' style={{display: "none"}} value={team.no} name="team no" />
              <StartButton className="btn" type="submit"> Submit </StartButton>
            </form>
          }
          {
            team.no - index - 1 ? (
            <Button className="btn" onClick={(e) => next()} >
              Next
            </Button>
            ) : ("")
          }
        </Row>
      </FormStyle>
    );
  }

  return (
    <FormStyle>
      <FormGroup>
      <h2 style={{textAlign: "center", width: "100%", fontWeight: "bold", color: "#2e4050"}}>Team Registeration</h2>
      <h6 style={{textAlign: "center", width: "100%", fontWeight: "400", color: "#2e4050"}}>Reserve Your seat</h6>
      </FormGroup>
    <FormGroup>
        <Row>
          <InputContainer
            className={(errorTeam.name ? team.name ? "error filled Team-name" : "error Team-name" : team.name ? "filled Team-name" :  "Team-name")}
          >
            <input
              type="text"
              value={team.name}
              onChange={(e) => setteam({ ...team, name: e.target.value.trimStart() })}
              className="form-control"
            />
          </InputContainer>
        </Row>
        <Row>
          <InputContainer
            className={(errorTeam.no ? team.no ? "no error filled Team-no" : "no error Team-no" : team.no ? "filled Team-no" :  "Team-no")}
            >
            <input
              type="number"
              value={team.no}
              onChange={(e) => setteam({ ...team, no: e.target.value.trimStart() })}
              min="2"
              max="5"
              step="1"
              pattern="\d*"
              className="form-control"
            />
          </InputContainer>
        </Row>
        <Row>
          <InputContainer
            className={(errorTeam.idea ? team.idea ? "error filled Team-idea" : "error Team-idea" : team.idea ? "filled Team-idea" : "Team-idea")}
          >
            <textarea
              type="text"
              rows="5"
              value={team.idea}
              onChange={(e) => setteam({ ...team, idea: e.target.value.trimStart() })}
              className="form-control"
            />
          </InputContainer>
        </Row>
      </FormGroup>
      <Row>
      <StartButton
        className="btn"
        onClick={(e) => startBtn(e)}
      >
        Start
      </StartButton>
    </Row>
    </FormStyle>
  );
};

export default Form;
