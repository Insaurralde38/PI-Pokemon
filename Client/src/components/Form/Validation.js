const validation = (form) => {
    const errors = {};
    if (!form.name) errors.name = 'Pokémons must have a name';
    if (form.name && form.name.includes("/" || "*" || "+" || "$" || "#" || "!" || "%" || "&" || "(" || ")" || "=" || "?" || "¿" || "]" || "{" || "}" || "[" || "-" || "@" || "_" || "," || "." || ":" || "<" || ">")) errors.name = 'Signs are not allowed';
    if (form.name && form.name.length > 0 && form.name.length < 3) errors.name = '...of at least 3 letters.';
    return errors;
  };
  
  export default validation;