import prisma from '../../../lib/prisma';

export default async function handle(req, res) {

  if (req.method === "GET" && req.query.id) {
    const id= req.query.id
    const note = await prisma.note.findUnique({
      where: {
        id,
      },
    });
    res.send(note)
  }
  
  if (req.method === "GET") {
    const notes = await prisma.note.findMany();
    res.send(notes)
  }


  
  if(req.method==='POST'){
  const { content, title } = req.body;

  const result = await prisma.note.create({
    data: {
      title,
      content,
      completed: false,
    },
  });
res.json(result);
}

 res.json('result');
}
