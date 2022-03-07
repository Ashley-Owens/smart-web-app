
export default function validate(errors, setErrors, values) {
    console.log('values:', values)
    let fieldValues = values;

    let temp = { ...errors };
    if ('contactName' in fieldValues && fieldValues.madeContact === true) {
        temp.contactName = fieldValues.contactName ? "" : "This field is required when contact has been made.";
    }
    if ('contactTitle' in fieldValues && fieldValues.madeContact === true) {
        temp.contactTitle = fieldValues.contactTitle ? "" : "This field is required when contact has been made.";
    }
    if ('propertyName' in fieldValues) {
        temp.propertyName = fieldValues.propertyName ? "" : "This field is required.";
    }
    if ('status' in fieldValues) {
        temp.status = fieldValues.status ? "" : "This field is required.";
    }
    if ('address' in fieldValues) {
        temp.address = fieldValues.address ? "" : "This field is required.";
    }
    if ('city' in fieldValues) {
        temp.city = fieldValues.city ? "" : "This field is required.";
    }
    if ('state' in fieldValues) {
        temp.state = fieldValues.state ? "" : "This field is required.";
    }
    if ('zipCode' in fieldValues) {
        temp.zipCode = fieldValues.zipCode ? "" : "This field is required.";
    }
    if ('service' in fieldValues) {
        temp.service = fieldValues.service ? "" : "This field is required.";
    }
    if ('targetPest' in fieldValues) {
        temp.targetPest = fieldValues.targetPest ? "" : "This field is required.";
    }

    switch (values.service.toLowerCase()) {
        case 'roach assessment':
            if ('buildingNums' in fieldValues) {
                temp.buildingNums = fieldValues.buildingNums ? "" : "This field is required.";
            }
            if ('unitNums' in fieldValues) {
                temp.unitNums = fieldValues.unitNums ? "" : "This field is required.";
            }
            break;
        case 'bed bug inspection':
            if ('inspectionType' in fieldValues) {
                temp.inspectionType = fieldValues.inspectionType ? "" : "This field is required.";
            }
            if ('unitNums' in fieldValues) {
                temp.unitNums = fieldValues.unitNums ? "" : "This field is required.";
            }
            if ('reason' in fieldValues && ['k9 inspection', 'full inspection'].includes(values.inspectionType)) {
                temp.reason = fieldValues.reason ? "" : "This field is required.";
            }
            break;
        case 'bed bug treatment':
            if ('unitNums' in fieldValues) {
                temp.unitNums = fieldValues.unitNums ? "" : "This field is required.";
            }
            if ('observations' in fieldValues) {
                temp.observations = fieldValues.observations ? "" : "This field is required.";
            }
            break;
        case 'extreme bed bug':
            if ('unitNums' in fieldValues) {
                temp.unitNums = fieldValues.unitNums ? "" : "This field is required.";
            }
            if ('observations' in fieldValues) {
                temp.observations = fieldValues.observations ? "" : "This field is required.";
            }
            if ('reason' in fieldValues) {
                temp.reason = fieldValues.reason ? "" : "This field is required.";
            }
            break;
        case 'bird exclusion':
            if ('equipment' in fieldValues) {
                temp.equipment = fieldValues.equipment ? "" : "This field is required.";
            }
            if ('spikeLength' in fieldValues) {
                temp.spikeLength = fieldValues.spikeLength ? "" : "This field is required.";
            }
            if ('nettingLength' in fieldValues) {
                temp.nettingLength = fieldValues.nettingLength ? "" : "This field is required.";
            }
            if ('nettingWidth' in fieldValues) {
                temp.nettingWidth = fieldValues.nettingWidth ? "" : "This field is required.";
            }
            if ('tensionLineLength' in fieldValues) {
                temp.tensionLineLength = fieldValues.tensionLineLength ? "" : "This field is required.";
            }
            if ('screenLength' in fieldValues) {
                temp.screenLength = fieldValues.screenLength ? "" : "This field is required.";
            }
            if ('screenWidth' in fieldValues) {
                temp.screenWidth = fieldValues.screenWidth ? "" : "This field is required.";
            }
            if ('boomLiftHeight' in fieldValues && fieldValues.equipment === 'boomlift') {
                temp.boomLiftHeight = fieldValues.boomLiftHeight ? "" : "This field is required.";
            }
            break;
        case 'bird trapping':
            if ('numTraps' in fieldValues) {
                temp.numTraps = fieldValues.numTraps ? "" : "This field is required.";
            }
            if ('buildingNums' in fieldValues) {
                temp.buildingNums = fieldValues.buildingNums ? "" : "This field is required.";
            }
            if ('observations' in fieldValues) {
                temp.observations = fieldValues.observations ? "" : "This field is required.";
            }
            if ('excessHeight' in fieldValues) {
                temp.excessHeight = fieldValues.excessHeight ? "" : "This field is required.";
            }
            break;
        case 'dewebbing':
            if ('buildingNums' in fieldValues) {
                temp.buildingNums = fieldValues.buildingNums ? "" : "This field is required.";
            }
            if ('sprayHours' in fieldValues) {
                temp.sprayHours = fieldValues.sprayHours ? "" : "This field is required.";
            }
            break;
        case 'exterior rodent':
            if ('numStations' in fieldValues) {
                temp.numStations = fieldValues.numStations ? "" : "This field is required.";
            }
            if ('numPropertyBuildings' in fieldValues) {
                temp.numPropertyBuildings = fieldValues.numPropertyBuildings ? "" : "This field is required.";
            }
            if ('buildingNums' in fieldValues) {
                temp.buildingNums = fieldValues.buildingNums ? "" : "This field is required.";
            }
            if ('observations' in fieldValues) {
                temp.observations = fieldValues.observations ? "" : "This field is required.";
            }
            break;
        case 'interior rodent':
            if ('cutOut' in fieldValues) {
                temp.cutOut = fieldValues.cutOut ? "" : "This field is required.";
            }
            if ('unitNums' in fieldValues) {
                temp.unitNums = fieldValues.unitNums ? "" : "This field is required.";
            }
            if ('observations' in fieldValues) {
                temp.observations = fieldValues.observations ? "" : "This field is required.";
            }
            break;
        case 'rodent exclusion':
            if ('numPipes' in fieldValues) {
                temp.numPipes = fieldValues.numPipes ? "" : "This field is required.";
            }
            if ('numVents' in fieldValues) {
                temp.numVents = fieldValues.numVents ? "" : "This field is required.";
            }
            if ('numMeterBoxes' in fieldValues) {
                temp.numMeterBoxes = fieldValues.numMeterBoxes ? "" : "This field is required.";
            }
            if ('numEntryPoints' in fieldValues) {
                temp.numEntryPoints = fieldValues.numEntryPoints ? "" : "This field is required.";
            }
            break;
        default:
            break;
    };
    
    setErrors({
        ...temp
    });

    if (fieldValues === values) {
        return Object.values(temp).every(x => x === "");
    }
};