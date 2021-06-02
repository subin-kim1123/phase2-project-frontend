import React, {useState} from "react";
import { Form, Modal, Button } from "semantic-ui-react";

export default function ModalContainer({ props, handleChange, handleSubmit }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      size="small"
      trigger={<Button>Add a new recipe!</Button>}
    >
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="title"
              placeholder="title"
              name="title"
              onChange={handleChange}
              value={props.title}
            />
            <Form.Input
              fluid
              label="readyIn"
              placeholder="readyIn"
              name="readyIn"
              onChange={handleChange}
              value={props.readyIn}
            />
            <Form.Input
              fluid
              label="servings"
              placeholder="Servings"
              name="servings"
              onChange={handleChange}
              value={props.servings}
            />
            <Form.Input
              fluid
              label="calories"
              placeholder="calories"
              name="calories"
              onChange={handleChange}
              value={props.calories}
            />
            <Form.Input
              fluid
              label="ingredients"
              placeholder="ingredients (separate with commas)"
              name="ingredients"
              onChange={handleChange}
              value={props.ingredients}
            />
            <Form.Input
              fluid
              label="steps"
              placeholder="steps (separate with commas)"
              name="steps"
              onChange={handleChange}
              value={props.steps}
            />
            <Form.Input
              fluid
              label="image"
              placeholder="url"
              name="image"
              onChange={handleChange}
              value={props.image}
            />
            <Form.Input
              fluid
              label="blog"
              placeholder="comment"
              name="blog"
              onChange={handleChange}
              value={props.blog}
            />
            <Form.Input
              fluid
              label="winePairing"
              placeholder="winePairing"
              name="winePairing"
              onChange={handleChange}
              value={props.winePairing}
            />
            <Form.Input
              fluid
              label="source"
              placeholder="url"
              name="source"
              onChange={handleChange}
              value={props.source}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </Modal.Content>

      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
