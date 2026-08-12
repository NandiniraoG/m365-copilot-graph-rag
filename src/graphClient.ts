export type GraphSource = "sharepoint" | "teams" | "outlook";

export interface GraphDocument {
  id: string;
  source: GraphSource;
  title: string;
  url: string;
  snippet: string;
}

export class GraphClient {
  async search(query: string): Promise<GraphDocument[]> {
    const normalized = query.trim();

    return [
      {
        id: "sp-001",
        source: "sharepoint",
        title: "AI Governance Policy",
        url: "https://contoso.sharepoint.com/sites/ai/policy",
        snippet: `SharePoint policy result related to: ${normalized}`
      },
      {
        id: "teams-001",
        source: "teams",
        title: "AI Working Group Discussion",
        url: "https://teams.microsoft.com/l/message/demo",
        snippet: `Teams discussion result related to: ${normalized}`
      },
      {
        id: "mail-001",
        source: "outlook",
        title: "Project Risk Update",
        url: "https://outlook.office.com/mail/demo",
        snippet: `Outlook mail result related to: ${normalized}`
      }
    ];
  }
}

