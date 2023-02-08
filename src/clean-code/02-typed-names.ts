(() => {
  // arreglo de temperaturas celsius
  // Bad Name
  const arrayOfNums = [33.6, 12.34];
  // Better Name
  const celsiusTempList = [33.6, 12.34];

  // Dirección ip del servidor
  // Bad Name
  const ip = "123.123.123.123";
  // Better Name
  const serverIpAddress = "123.123.123.123";

  // Listado de usuarios
  // Bad Name
  const people = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];
  // Better Name
  const users = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  // Listado de emails de los usuarios
  // Bad Name
  const emails = people.map((u) => u.email);
  // Better Name
  const usersEmailList = users.map((user) => user.email);

  // Variables booleanas de un video juego
  // Bad Name
  const jump = false;
  // Better Name
  const canJump = true;
  // Bad Name
  const run = true;
  // Better Name
  const canRun = true;
  // Bad Name
  const noTieneItems = true;
  // Better Name
  const hasItems = true;
  // Bad Name
  const loading = false;
  // Better Name
  const isLoading = false;

  // Otros ejercicios
  // tiempo inicial
  // Bad Name
  const start = new Date().getTime();
  // Better Name
  const startTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  // Bad Name
  const end = new Date().getTime() - start;
  // Better Name
  const endTime = new Date().getTime() - startTime;

  // Funciones
  // Obtiene los libros
  // Bad Name
  function book() {
    throw new Error("Function not implemented.");
  }

  // Better Name
  function getBooks() {
    throw new Error("Function not implemented.");
  }

  // obtiene libros desde un URL
  // Bad Name
  function BooksUrl(u: string) {
    throw new Error("Function not implemented.");
  }
  // Better Name
  function getBooksByUrl(url: string) {
    throw new Error("Function not implemented.");
  }

  // obtiene el área de un cuadrado basado en sus lados
  // Bad Name
  function areaCuadrado(s: number) {
    throw new Error("Function not implemented.");
  }

  // Better Name
  function getSquareArea(side: number) {
    throw new Error("Function not implemented.");
  }
  // imprime el trabajo
  // Bad Name
  function printJobIfJobIsActive() {
    throw new Error("Function not implemented.");
  }
  // Better Name
  function printJob() {
    throw new Error("Function not implemented.");
  }
})();
