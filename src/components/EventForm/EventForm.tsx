import "./EventForm.styles.css";
import Fieldset from "../Fieldset";
import Input from "../Input";
import Label from "../Label";
import TitleForm from "../TitleForm";
import Select from "../Select";
import Button from "../Button";

const options = [
  { value: "Hackathon", children: "Hackathon" },
  { value: "Workshop", children: "Workshop" },
  { value: "Conferência", children: "Conferência" },
  { value: "Meetup", children: "Meetup" },
];

function EventForm() {
  return (
    <form className="form-evento">
      <TitleForm className="title-form">
        Preencha para criar um evento:
      </TitleForm>
      <div className="fields">
        <Fieldset className="fieldset-form">
          <Label className="label-form" htmlFor="eventName">
            Qual o nome do evento?
          </Label>
          <Input
            className="input-form"
            type="text"
            id="eventName"
            placeholder="Summer dev hits"
          />
        </Fieldset>
        <Fieldset className="fieldset-form">
          <Label className="label-form" htmlFor="eventDate">
            Data do Evento
          </Label>
          <Input className="input-form" type="date" id="eventDate" />
        </Fieldset>
        <Fieldset className="fieldset-form">
          <Label className="label-form" htmlFor="eventTheme">
            Tema do Evento
          </Label>
          <Select id="eventTheme" className="select-form" options={options} />
        </Fieldset>
      </div>
      <div className="acoes">
        <Button className="button-form" id="btn-form">
          Criar Evento
        </Button>
      </div>
    </form>
  );
}

export default EventForm;
