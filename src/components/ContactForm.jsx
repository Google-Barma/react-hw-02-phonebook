import { Component } from 'react';

export default class ContactsForm extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    name: '',
    phone: '',
  };

  onClearState = () => this.setState({ name: '', phone: '' });

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;

    this.props.onAddContacts(name, phone);

    this.onClearState();
  };

  render() {
    const { name, phone } = this.state;
    return (
      <>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label id="name" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={e => this.handleChange(e)}
          />
          <label id="phone" htmlFor="phone">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={e => this.handleChange(e)}
          />
          <button type="submit" disabled={!(name, phone)}>
            add contact
          </button>
        </form>
      </>
    );
  }
}
