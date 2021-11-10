exports.formatData = (currentData, dataResults) => {
    const currentDataFormatted = currentData.substring(0, currentData.length - 1);
    const dataResultsFormatted = dataResults.substring(1);

    const dataInsertion = currentDataFormatted.concat(", ", dataResultsFormatted);

    return dataInsertion;
}