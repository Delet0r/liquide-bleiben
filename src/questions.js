export default
[
    {
        "element": {
            "tag": "p",
            "content": "<a target=\"_blank\" href=\"wir-bleiben-liqui.de\">wir-bleiben-liqui.de</a><br/>bietet weder Rechts- noch Steuerberatung an.<br>Bei diesem Angebot handelt es sich lediglich um einen kostenfreien und unverbindlichen Informationszugang für alle, die aufgrund (drohender) Liquiditätsengpässe finanzielle Unterstützung benötigen.<br>Die Plattform bietet diese Unterstützung nicht selbst an, hilft aber dabei, passende Angebote von Finanzinstituten einzugrenzen.<br>Bei Fragen rechtlicher, steuerlicher oder finanzplanerischer Natur sollten Experten der jeweiligen Themenfelder oder die Finanzinstitute selbst konsultiert werden."
        }
    },
    {
        "title": null,
        "text": "Hiermit können wir Ihnen helfen die Programme aus Ihrem Bundesland für Sie zu finden. Bitte wählen Sie das Bundesland aus, in dem der Sitz Ihres Unternehmens ist.",
        "element": {
            "tag": "select",
            "placeholder": "Bundesland wählen"
        },
        "source": {
            "type": "apicall",
            "url": "http://",
            "property": "x.y"
        }
    },
    {
        "title": null,
        "text": "Für einige Branchen gibt es spezielle Förder- und Hilfsprogramme. Lassen Sie uns wissen in welcher Branche Sie tätig sind, damit wir Ihnen genauere Vorschläge machen können.",
        "element": {
            "tag": "select",
            "placeholder": "Branche wählen"
        }
    },
    {
        "title": "Mein Unternehmen ist ... Jahre alt",
        "text": "Für junge und bereits etablierte Unternehmen gibt es oft unterschiedliche Förderprogramme. Lassen Sie uns wissen seit wievielen Jahren es Ihr Unternehmen bereits gibt und wir suchen für Sie die passenden Angebote.",
        "element": {
            "tag": "input",
            "type": "number",
            "placeholder": "XX",
            "min": 0,
            "max": 99
        }
    },
    {
        "title": "Mein Unternehmen hatte 2019 einen Umsatz von ... €",
        "text": "Je nach Umsatz Ihres Unternehmens gibt es unterschiedliche Förderprogramme, lassen Sie uns den Umsatz des letzten Jahres wissen, damit wir die für Sie passenden Programme finden können.",
        "element": {
            "tag": "input",
            "type": "number",
            "placeholder": "XXXXXX"
        }
    },
    {
        "title": "Mein Unternehmen hat ... Mitarbeiter:innen",
        "text": "Je nach Anzahl der Mitarbeiter:innen in Ihrem Unternehmen gibt es unterschiedliche Förderprogramme und Hilfen, lassen Sie uns die Anzahl Ihrer Mitarbeiter:innen wissen, damit wir die für Sie passenden Programmen finden können. Sollten Sie keine Mitarbeiter:innen haben und ein:e Solo-Unternehmer:in sein, tragen Sie bitte eine \"0\" ein.",
        "element": {
            "tag": "input",
            "type": "number",
            "placeholder": "XX"
        }
    }
]