import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      zip_code: Yup.string().required()
    });

    // Verifica se a validação falhou
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Verifica se foi enciado o ID
    if (req.body.id) {
      return res.status(400).json({ error: 'ID Recipient is not required.' });
    }

    const nameExists = await Recipient.findOne({
      where: { name: req.body.name }
    });

    // Verifica se o nome informado já existe no banco
    if (nameExists) {
      return res.status(400).json({ error: 'Name already exists.' });
    }

    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      state: Yup.string(),
      zip_code: Yup.string()
    });

    // Verifica se a validação falhou
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (!req.body.id) {
      return res.status(400).json({ error: 'Not found ID Recipient.' });
    }

    const recipient = await Recipient.findByPk(req.body.id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient already exists.' });
    }

    const {
      name,
      street,
      number,
      complement,
      state,
      zip_code,
      country
    } = await recipient.update(req.body);

    return res.json({
      name,
      street,
      number,
      complement,
      state,
      zip_code,
      country
    });
  }
}

export default new RecipientController();
