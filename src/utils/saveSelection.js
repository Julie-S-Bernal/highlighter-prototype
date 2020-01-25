
const getSelectedText = function() {
    let highlightedText = '';
    const activeElement = document.activeElement;
    const activeElementTagName = activeElement ? activeElement.tagName.toLowerCase() : null;
    if (
      (activeElementTagName === "textarea") || (activeElementTagName === "input" &&
      /^(?:text|search|password|tel|url)$/i.test(activeElement.type)) &&
      (typeof activeElement.selectionStart == "number")
    ) {
      highlightedText = activeElement.value.slice(activeElement.selectionStart, activeElement.selectionEnd);
    } else if (window.getSelection) {

      highlightedText = window.getSelection().toString();
    }
    alert(highlightedText)
    return highlightedText


}

export default getSelectedText;
