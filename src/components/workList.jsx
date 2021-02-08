import { Work, Work2, Work3 } from "./work";
import mindhack from "./images/mindhack.png";
import secrets from "./images/secrets.png";
import todolist from "./images/todolist.png";
import { CardColumns, Container } from "react-bootstrap";

export default function WorkList() {
  return (
    <section id="work" style={{ paddingTop: "5%" }}>
      <h1 class="text-center pb-5">My Work!</h1>

      <Container>
        <CardColumns>
          <Work
            msrc1={todolist}
            msrc2={mindhack}
            msrc3={secrets}
            title="Secrets"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            src={secrets}
          />
          <Work2
            msrc1={todolist}
            msrc2={mindhack}
            msrc3={secrets}
            title="Mindhack"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            src={mindhack}
          />
          <Work3
            msrc1={todolist}
            msrc2={mindhack}
            msrc3={secrets}
            title="ToDo list"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            src={todolist}
          />
        </CardColumns>
        <CardColumns></CardColumns>
      </Container>
    </section>
  );
}
