/**
 * Software Genome (SGX) - Web Architectural Blueprint Exporter
 */

class BlueprintExporter {
  exportAsJson(synthesizedResult) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(synthesizedResult, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "software-genome-blueprint.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }
}

const globalObj = typeof window !== 'undefined' ? window : global;
globalObj.BlueprintExporter = BlueprintExporter;

module.exports = BlueprintExporter;
