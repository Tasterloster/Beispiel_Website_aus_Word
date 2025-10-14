export type JsonChild = { id: string|number; text: string; path: string }
export type JsonItem = {
  id: string|number; text: string; path: string
  subRoutes?: JsonChild[];
  ['sub-routes']?: JsonChild[];
}

const abs = (p: string) => (p?.startsWith('/') ? p: `/${p ?? ''}`);
const join = (parent: string, child: string) =>
  child?.startsWith('/') ? child: `${abs(parent).replace(/\/$/, '')}/${(child ?? '').replace(/^\//, '')}`;

export type ChildLink = { id: string|number; text: string; path: string }
export type ParentLink = { id: string|number; text: string; path: string }

export function normalizeItems(items: JsonItem[]){
  const parents: ParentLink[] = [];
  const map = new Map<string, ChildLink[]>();

  for (const item of items) {
    const parentPath = abs(item.path);
    parents.push({ id: item.id, text: item.text, path: parentPath});

    const kids = (item.subRoutes ?? (item as any )['sub-routes']) as JsonChild[] | undefined;
    if ( Array.isArray(kids && kids.length) ) {
      map.set(
        parentPath,
        kids!.map(c=>({
          id: `${item.id}-${c.id}`,
          text: c.text,
          path: join(item.path, c.path),
        }))
      );
    }
  }
  return { parents, childrenbyParent: map };
}