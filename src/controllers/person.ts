import { Request, Response } from "express";
import { Person, IPerson } from "../models/Person";
import { verifyName } from "../validation/validator";


export class PersonController {
  async createPerson(req: Request, res: Response) {
    const { name } = req.body;

    let firstNameValidation: any = verifyName(name);
    if (firstNameValidation.message) {
      return res.status(400).json({ message: firstNameValidation.message });
    }

    try {
      const person = new Person({ name });
      await person.save();
      return res.status(201).json(person);
    } catch (error: any) {
      console.log(error);
    }
  }

  async getPersonById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const person = await Person.findById(id);
      if (!person) {
        return res.status(404).json({ error: "Person not found." });
      }
      return res.json(person);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to retrieve a person." });
    }
  }

  async getPeopleByName(req: Request, res: Response) {
    const { name } = req.query;

    if (!name || typeof name !== "string") {
      return res.status(400).json({ error: "Invalid name parameter." });
    }

    try {
      const people = await Person.find({ name });
      if (!people || people.length === 0) {
        return res.status(404).json({ error: "No people found with the provided name." });
      }
      return res.status(200).json(people);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to retrieve people by name." });
    }
  }

  async getAllPeople(req:Request,res: Response){
    try {
      const people= await Person.find();
      if (!people) {
        return res.status(404).json({ error: "No People found." });
      }
      return res.status(200).json(people);

    } catch (error) {
      return res.status(500).json({ error: "Failed to retrieve all people." });
    }
  }

  async updatePerson(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const person = await Person.findByIdAndUpdate(
        id,
        { name },
        { new: true }
      );
      if (!person) {
        return res.status(404).json({ error: "Person not found." });
      }
      return res.json(person);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to update a person." });
    }
  }

  async deletePerson(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const person = await Person.findByIdAndDelete(id);
      if (!person) {
        return res.status(404).json({ error: "Person not found." });
      }
      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to delete a person." });
    }
  }
}
