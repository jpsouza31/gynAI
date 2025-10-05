import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#90a959',
    height: 120,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButtonText: {
    color: '#FFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export const markdownStyles = StyleSheet.create({
  body: {
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
  },
  heading1: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 8,
  },
  heading2: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 16,
  },
  heading3: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 12,
  },
  strong: {
    color: '#000',
    fontWeight: 'bold',
  },
  em: {
    color: '#000',
    fontStyle: 'italic',
  },
  list_item: {
    color: '#000',
    marginBottom: 8,
  },
  bullet_list: {
    marginBottom: 16,
  },
  ordered_list: {
    marginBottom: 16,
  },
  paragraph: {
    color: '#000',
    marginBottom: 12,
    lineHeight: 24,
  },
  code_inline: {
    backgroundColor: '#2a2a2a',
    color: '#10b981',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontFamily: 'monospace',
  },
  code_block: {
    backgroundColor: '#2a2a2a',
    color: '#10b981',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontFamily: 'monospace',
  },
  blockquote: {
    backgroundColor: '#1f2937',
    borderLeftColor: '#10b981',
    borderLeftWidth: 4,
    paddingLeft: 16,
    paddingVertical: 8,
    marginBottom: 16,
  },
  hr: {
    backgroundColor: '#374151',
    height: 1,
    marginVertical: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 8,
    marginBottom: 16,
  },
  thead: {
    backgroundColor: '#1f2937',
  },
  th: {
    color: '#10b981',
    fontWeight: 'bold',
    padding: 12,
  },
  td: {
    color: '#d1d5db',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#374151',
  },
  link: {
    color: '#10b981',
    textDecorationLine: 'underline',
  },
});
