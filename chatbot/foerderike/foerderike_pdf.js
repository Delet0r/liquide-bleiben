const logo = "iVBORw0KGgoAAAANSUhEUgAAASUAAABkCAYAAADAFCYKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAzLTIyVDExOjQyOjQwKzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMy0yMlQxMTo1MjoxNyswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMy0yMlQxMTo1MjoxNyswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphMTFjMjliMy01OTUyLTljNDEtYmEzMy00OGQ2YWE3OWQzNGMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphY2ZkYmYzNS02Mjk3LTFjNDEtOTZkMi05YjhhZGQ1NzY0NjkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMDM5MzNiZS0xMDk3LTU2NGMtYjZkOC05ZjRiZThiZjJiMjUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmUwMzkzM2JlLTEwOTctNTY0Yy1iNmQ4LTlmNGJlOGJmMmIyNSIgc3RFdnQ6d2hlbj0iMjAyMC0wMy0yMlQxMTo0Mjo0MCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMTFjMjliMy01OTUyLTljNDEtYmEzMy00OGQ2YWE3OWQzNGMiIHN0RXZ0OndoZW49IjIwMjAtMDMtMjJUMTE6NTI6MTcrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4+91b4AAAYXElEQVR42u2dCZxP1fvHz5iRGTPMaoyxDgZjFjsZza9SUpEl9SMSpWwhRYu9tEkZqT8yirFFlkhS1kKofynhl7RQ0r/S4idFqO7/ee48d+a4c+69323GnZnnvF6fl/E955577rnnvO9znnPOvULTNMFisVhuEVcCi8ViKLFYLBZDicViMZRYLBaLocRisRhKLBaLxVBisVgMJRaLxWIosVgshhKLxWIxlFgsFouhxGKxGEosFovFUGKxWAwlFovFYiixWCyGEovFYjGUWCwWQ4nF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"

const pageWidth = 8.5, // inch
    lineHeight = 1.2,
    margin = 0.5,
    maxLineWidth = pageWidth - margin * 2,
    fontSize = 24,
    ptsPerInch = 72,
    oneLineHeight = (fontSize * lineHeight) / ptsPerInch;

const intro = "Liebe Nutzerin, lieber Nutzer,\n"
    +"\n"
    +"mithilfe deiner Angaben habe ich dir eine individuelle Übersicht erstellt, welche du zur Vorbereitung des Termins mit deiner Hausbank heranziehen kannst.\n"
    +"Ich empfehle dir die aufgeführten Unterlagen bereits vor dem Termin mit der Bank zusammenzustellen, sodass die Auszahlung der Fördermittel möglichst reibungslos erfolgen kann.\n"
    +"\n"
    +"Beachte bitte, dass diese Liste keinesfalls vollumfänglich ist. Sprich deshalb bestenfalls auch nochmal mit der für dich zuständigen Person in deiner Bank und lass dieser die angehängte Übersicht zukommen.\n"
    +"\n";

const avail_docs = "Folgende Unterlagen hast du bereits vorbereitet:\n";

const needed_docs = "Folgende Unterlagen solltest du in Vorbereitung auf den Termin mit deiner Bank noch vorbereiten:\n";
const needed_docs1 = "In deinen eigenen Unterlagen findest du:\n";
const needed_docs2 = "Dein Steuerbüro hilft dir bei:\n";
const needed_docs3a = "Dein ";
const needed_docs3b = " hilft dir bei:\n";

const applied_for = "Folgende Fördermaßnahmen hast du bereits beantragt:\n";

const potential = "Bevor du einen Förderkredit beantragst, kann es sinnvoll oder nötig sein, zunächst andere Fördermaßnahmen in Anspruch zu nehmen. "
    +"Sprich diesbezüglich zunächst mit deinem Steuerbüro und deiner Bank.\n";
const potential1 = "Folgende Fördermaßnahmen kannst du selbst beantragen:\n";
const potential2 = "Bei folgenden Fördermaßnahmen hilft dir dein Steuerberater:\n";
const potential3 = "Bei folgenden Fördermaßnahmen hilft dir ";

const disclaimer = "http://wir-bleiben-liqui.de bietet weder Rechts- noch Steuerberatung an.\n"
    +"Bei diesem Angebot handelt es sich lediglich um einen kostenfreien und unverbindlichen Informationszugang für alle, die aufgrund (drohender) Liquiditätsengpässe finanzielle Unterstützung benötigen.\n"
    +"Die Plattform bietet diese Unterstützung nicht selbst an, hilft aber dabei, passende Angebote von Finanzinstituten einzugrenzen.\n"
    +"Bei Fragen rechtlicher, steuerlicher oder finanzplanerischer Natur sollten Experten der jeweiligen Themenfelder oder die Finanzinstitute selbst konsultiert werden.\n";

const divisions = [ "buchhaltung", "steuererklärung", "jahresabschluss", "lohnabrechnung" ];

const document_provider = 
{
    "Aktuellster Jahresabschluss": "jahresabschluss", 
    "BWA des letzten Geschäftsjahres (inkl. abgestimmter Summen- und Saldenliste)": "buchhaltung", 
    "BWA des aktuellen Geschäftsjahres": "buchhaltung", 
    "Liquiditätsplanung für 2020 und 2021": "jahresabschluss", 
    "Rentabilitätsplanung für 2020 und 2021": "jahresabschluss", 
    "Kurze Beschreibung der Auswirkungen der Pandemie auf ihr Unternehmen": "", 
    "Kurze Situationsbeschreibung eingeleiteter Maßnahmen": "", 
    "Handelsregisterauszug": "", 
    "Gesellschafterliste": "",
    "Selbstauskunft der geschäftsführenden Gesellschafter (Dokument der Bank)": "",

    // Kapitalgesellschaft
    //  nichts eigentständiges?

    // Personengesellschaft
    "Letzter vorhandener Steuerbescheid und -erklärung (ESt, KSt, GewSt)": "steuererklärung", 
    "Auflistung Privatentnahmen": "", 
    "Planung Privatentnahmen": "",
};

const measure_provider =
{
    "Beantragung von Kurzarbeitergeld": "lohnabrechnung", 
    "Stundung der Sozialversicherungsbeiträge": "lohnabrechnung", 
    "Stundung der fälligen Steuerlast (ESt, KSt, USt)": "steuererklärung", 
    "Herabsetzung von Steuer-Vorauszahlungen (ESt, KSt)": "steuererklärung", 
    "Beantragung Steuererstattung 1/11": "steuererklärung", 
    "Beantragung Corona Soforthilfe-Zuschuss": "", 
    "Gespräch mit Vermieter bzgl. Mietstundung": "", 
    "Verhandlung der Zahlungsbedingungen mit Lieferanten": "", 

    // Personengesellschaft
    "Stundung der KV-Beiträge der Gesellschafter beantragt": "",

    // Kapitalgesellschaft
};

function liste_aus(array){
    var res = ""
    for (var i of array)
    {
        res = res + " - " + i + "\n";
    }
    return res;
}

/* example answers:
    "hallo": "Ich bin bereit.",
    "legal": "Kapitalgesellschaft",
    "documents_corporation": "Aktuellster Jahresabschluss, BWA des aktuellen Geschäftsjahres",
    "wer_macht_was_buchhaltung": "Ein anderer Dienstleister",
    "wer_macht_was_steuererklärung": "Ein anderer Dienstleister",
    "wer_macht_was_jahresabschluss": "Du selbst oder eine interne Abteilung",
    "wer_macht_was_lohnabrechnung": "Dein Steuerberater",
    "measures": "Stundung der Sozialversicherungsbeiträge, Beantragung von Kurzarbeitergeld",
    "buchhaltung_extern": "Ernie",
    "steuererklärung_extern": "Bert"
*/

function wer_tut(was) {
    if (answers["wer_macht_was_"+was]=="Ein anderer Dienstleister") {
        return answers[was+"_extern"];
    } else if (answers["wer_macht_was_"+was]=="Dein Steuerberater") {
        return "Steuerberater";
    } else {
        return "ich";
    }
}


function combine_text(answers) {
    // Dokumente
    var kapitalgesellschaft = answers["legal"]=="Kapitalgesellschaft";
    var docindex = kapitalgesellschaft ? "documents_corporation" : "documents_partnership";
    var all_documents= foerderike_steps.find(v => v.id == docindex)["answers"];
    var available_documents = answers[docindex].split(", ");
    var missing_documents = all_documents.filter(e => !available_documents.includes(e));

    var division_name= {};
    var who_does_what = {};
    var who_helps_with_what = {};
    for (var i of divisions) {
        division_name[i] = wer_tut(i);
        who_does_what[division_name[i]]=[]; // start with an empty list of documents
        who_helps_with_what[division_name[i]]=[]; // start with an empty list of measures
    }

    for (var i of missing_documents) {
        var wer_tut2 = document_provider[i];
        if (wer_tut2 && division_name[wer_tut2])
            who_does_what[division_name[wer_tut2]].push(i);
        else
            who_does_what["ich"].push(i); // fallback
    }

    var res = intro;
    if (available_documents.length>0) {
        res = res + avail_docs + liste_aus(available_documents) + "\n";
    }
    if (missing_documents.length>0) {
        res = res + needed_docs;
        if (who_does_what["ich"].length>0) {
            res = res + needed_docs1 + liste_aus(who_does_what["ich"]);
        }
        if (who_does_what["Steuerberater"].length>0) {
            res = res + needed_docs2 + liste_aus(who_does_what["Steuerberater"]);
        }
        for (var i in who_does_what) {
            if (i=="ich" || i=="Steuerberater") {}
            else if (who_does_what[i].length>0)
            {
                // should we really prefix this by "Dein" ???
                res = res+ i + needed_docs3b + liste_aus(who_does_what[i]);
            }
        }
        res= res+"\n";
    }
    // Fördermassnahmen
    var applied_measures = answers["measures"].split(", ");
    var all_measures1 = foerderike_steps.find(v => v.id == "measures")["answers"];
    var all_measures = all_measures1.find(w => w["if"]["legal"]==answers["legal"]).values;
    var future_measures = all_measures.filter(e => !applied_measures.includes(e));

    if (applied_measures.length>0) {
        res = res + applied_for + liste_aus(applied_measures) + "\n";
    }
    res = res + potential + "\n";
    for (var i of future_measures) {
        var wer_tut3 = measure_provider[i];
        if (wer_tut3 && division_name[wer_tut3])
            who_helps_with_what[division_name[wer_tut3]].push(i);
        else
            who_helps_with_what["ich"].push(i); // fallback
    }
    if (who_helps_with_what["ich"].length>0) {
        res = res + potential1 + liste_aus(who_helps_with_what["ich"]);
    }
    if (who_helps_with_what["Steuerberater"].length>0) {
        res = res + potential2 + liste_aus(who_helps_with_what["Steuerberater"]);
    }
    for (var i in who_helps_with_what) {
        if (i=="ich" || i=="Steuerberater") {}
        else if (who_helps_with_what[i].length>0)
        {
            res = res+ potential3 + i + ":\n" + liste_aus(who_helps_with_what[i]);
        }
    }
    res= res+"\n";
    return res + disclaimer;
}

function foerderike_pdf(answers) {
    var text = combine_text(answers);
    var doc = new jsPDF({
        unit: "in",
        lineHeight: lineHeight,
    });
    doc.setProperties({ title: "Förderike"});
    //var img = doc.extractImageFromDataUrl("https://wir-bleiben-liqui.de/wp-content/uploads/2020/03/logo_header1-300x81.png");
    doc.addImage(logo, "PNG", 5.7, 0.3, 2, 0.6);
    var textlines = doc.setFont("helvetica", "neue")
        .setFontSize(12)
        .splitTextToSize(text, maxLineWidth);
    doc.text(textlines, margin, margin+oneLineHeight);
    doc.save("förderike.pdf");
}

document.getElementById('pdf').onclick = () => { foerderike_pdf(answers); };
