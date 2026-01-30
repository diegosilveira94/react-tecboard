import "./EventForm.styles.css";
import Fieldset from "../Fieldset";
import Input from "../Input";
import Label from "../Label";
import TitleForm from "../TitleForm";
import Select from "../Select";
import Button from "../Button";
import { themes } from "../../data/themes";
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
          <Label className="label-form" htmlFor="themeCover">
            Qual o endereço da imagem de capa?
          </Label>
          <Input
            className="input-form"
            type="text"
            id="themeCover"
            placeholder="https://..."
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
          <Select id="eventTheme" options={themes} />
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
