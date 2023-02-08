(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  // Bad Name
  const fs = [
    { id: 1, f: false },
    { id: 2, f: false },
    { id: 3, f: true },
    { id: 4, f: false },
    { id: 5, f: false },
    { id: 7, f: true },
  ];

  // Better Name
  const filesToEvaluate = [
    { fileId: 1, deleteFile: false },
    { fileId: 2, deleteFile: false },
    { fileId: 3, deleteFile: true },
    { fileId: 4, deleteFile: false },
    { fileId: 5, deleteFile: false },
    { fileId: 7, deleteFile: true },
  ];

  // Archivos marcados para borrar - files to delete
  // Bad Name
  const arhivos = fs.map((f) => f.f);
  // Better Name
  const filesToDelete = filesToEvaluate.map((file) => file.deleteFile);

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  // Bad Name
  const ddmmyyyy = new Date();
  // Better Name
  const today = new Date();

  // días transcurridos - elapsed time in days
  // Bad Name
  const d: number = 23;
  // Better Name
  const elapsedTimeInDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  // Bad Name
  const dir = 33;
  // Better Name
  const numberOfFilesInDirectory = 33;

  // primer nombre - first name
  // Bad Name
  const nombre = "Fernando";
  // Better Name
  const firstName = "Fernando";

  // primer apellido - last name
  // Bad Name
  const apellido = "Herrera";
  // Better Name
  const lastName = "Herrera";

  // días desde la última modificación - days since modification
  // Bad Name
  const dsm = 12;
  // Better Name
  const daysSinceLastModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  // Bad Name
  const max = 6;
  // Better Name
  const maxClassesPerStudent = 6;
})();
