import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform, TouchableOpacity, Text } from 'react-native';

type Props = Omit<ComponentProps<'a'>, 'href'> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  const isWeb = Platform.OS === 'web';

  const handlePress = async () => {
    if (isWeb) {
      // Para la plataforma web, abrimos el enlace en una nueva pestaña
      window.open(href, '_blank');
    } else {
      // Para plataformas nativas, usamos expo-web-browser
      await openBrowserAsync(href);
    }
  };
  
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={{ color: 'blue' }}>{rest.children}</Text>
    </TouchableOpacity>
  );
}
