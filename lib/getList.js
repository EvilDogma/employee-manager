const {getTable} = require('./utils')


async function getDepartmentList() {
    const deps = await getTable('department')
    const depList = deps.map(obj => {
        const item = {}
        item.name = obj.name,
            item.value = obj.id
        return item
    })
    return depList
}

async function getRoleList() {
    const roles = await getTable('role')
    const roleList = roles.map(obj => {
        const item = {}
        item.title = obj.title
        item.value = obj.id
        return item
    })
    return roleList
}

async function getEmployeeList() {
    const emps = await getTable('employee')
    const empList = emps.map(obj => {
        const item = {}
        item.name = obj.first_name + ' ' + obj.last_name
        item.value = obj.id
        return item
    })
    return empList
}


module.exports = {getDepartmentList, getRoleList, getEmployeeList}