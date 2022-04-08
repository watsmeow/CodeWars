    let hyperPatients = []
    for (let i = 0; i < patients.length; i++) {
        let systolic = 0
        let diastolic = 0
        for (let j = 0; j < patients[i].length; j++) {
            let inside = patients[i][j].split('/')
            inside[0] = parseInt(inside[0])
            inside[1] = parseInt(inside[1])
            systolic += inside[0]
            diastolic += inside[1]
            if (inside[0] >= 180 && inside[1] >= 110) {
                if (!hyperPatients.includes(i)) {
                hyperPatients.push(i)}
            }
        }
        if (patients[i].length > 1) {
            systolic = systolic/patients[i].length
            diastolic = diastolic/patients[i].length
            if (systolic >= 140 || diastolic >= 90) {
                if (!hyperPatients.includes(i)) {
                    hyperPatients.push(i)}
            }
        }
        
    }
    return hyperPatients.length
