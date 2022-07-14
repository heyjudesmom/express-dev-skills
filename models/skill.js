const skills = [
    {id: 1, skill: 'HTML', used: true}, 
    {id: 2, skill: 'CSS', used: true}, 
    {id: 3, skill: 'JavaScript', used: true}, 
    {id: 4, skill: 'Node Express', used: true},
];

module.exports = {
    getAll, 
    getOne,
    create, 
    deleteOne,
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.used = false;
    skills.push(skill);
}
function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}