// activation de l'ensemble des infobulles de type tooltip
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(element => new bootstrap.Tooltip(element));

// activation de l'ensemble des infobulles de type popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(element => new bootstrap.Popover(element));
