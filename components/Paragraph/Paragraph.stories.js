import React from "react"

import Paragraph from "."
import Surface from "../Surface"

export default {
  title: "Components|Paragraph",
}

export const Standard = () => (
  <>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel purus
      eget turpis malesuada dapibus. In mattis venenatis ante, quis dignissim
      diam hendrerit vitae. In hac habitasse platea dictumst. Nam in libero
      tellus. Sed sed felis lobortis eros lobortis mattis interdum sed turpis.
      Sed mattis ante id viverra pulvinar. Proin vel sodales ex, vel blandit
      est. Mauris ut est et nulla tincidunt condimentum. Praesent vel imperdiet
      erat, et laoreet est. Aliquam aliquet neque dui, et interdum massa
      fermentum sit amet.
    </Paragraph>
    <Paragraph>
      Nullam suscipit eleifend felis nec lobortis. Mauris sem diam, tristique eu
      scelerisque id, mattis pellentesque erat. Nam finibus luctus pellentesque.
      Sed dignissim erat nunc, sit amet tempor tortor mollis ac. Integer
      vehicula risus ipsum, vel rhoncus tellus molestie eu. Sed malesuada
      hendrerit ipsum, sagittis euismod sapien bibendum quis. Maecenas sodales
      velit at mattis consectetur. Cras consectetur pellentesque nulla eget
      tempor. Fusce mauris leo, sagittis ac vestibulum non, placerat ac neque.
      Phasellus facilisis, sapien nec ultrices imperdiet, magna felis interdum
      mauris, ac tempor leo sapien sit amet lorem. Vestibulum vestibulum
      lobortis sollicitudin.
    </Paragraph>
    <Paragraph>
      Aliquam erat volutpat. Proin tincidunt tortor lorem, id bibendum mi
      sodales nec.
    </Paragraph>
  </>
)

export const withLead = () => (
  <>
    <Paragraph isLead>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel purus
      eget turpis malesuada dapibus. In mattis venenatis ante, quis dignissim
      diam hendrerit vitae. In hac habitasse platea dictumst. Nam in libero
      tellus. Sed sed felis lobortis eros lobortis mattis interdum sed turpis.
      Sed mattis ante id viverra pulvinar. Proin vel sodales ex, vel blandit
      est. Mauris ut est et nulla tincidunt condimentum. Praesent vel imperdiet
      erat, et laoreet est. Aliquam aliquet neque dui, et interdum massa
      fermentum sit amet.
    </Paragraph>
    <Paragraph>
      Nullam suscipit eleifend felis nec lobortis. Mauris sem diam, tristique eu
      scelerisque id, mattis pellentesque erat. Nam finibus luctus pellentesque.
      Sed dignissim erat nunc, sit amet tempor tortor mollis ac. Integer
      vehicula risus ipsum, vel rhoncus tellus molestie eu. Sed malesuada
      hendrerit ipsum, sagittis euismod sapien bibendum quis. Maecenas sodales
      velit at mattis consectetur. Cras consectetur pellentesque nulla eget
      tempor. Fusce mauris leo, sagittis ac vestibulum non, placerat ac neque.
      Phasellus facilisis, sapien nec ultrices imperdiet, magna felis interdum
      mauris, ac tempor leo sapien sit amet lorem. Vestibulum vestibulum
      lobortis sollicitudin.
    </Paragraph>
    <Paragraph>
      Aliquam erat volutpat. Proin tincidunt tortor lorem, id bibendum mi
      sodales nec.
    </Paragraph>
  </>
)

export const onDarkSurface = () => (
  <Surface backgroundColorType="brand-primary">
    <Paragraph isLead>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel purus
      eget turpis malesuada dapibus. In mattis venenatis ante, quis dignissim
      diam hendrerit vitae. In hac habitasse platea dictumst. Nam in libero
      tellus. Sed sed felis lobortis eros lobortis mattis interdum sed turpis.
      Sed mattis ante id viverra pulvinar. Proin vel sodales ex, vel blandit
      est. Mauris ut est et nulla tincidunt condimentum. Praesent vel imperdiet
      erat, et laoreet est. Aliquam aliquet neque dui, et interdum massa
      fermentum sit amet.
    </Paragraph>
    <Paragraph>
      Nullam suscipit eleifend felis nec lobortis. Mauris sem diam, tristique eu
      scelerisque id, mattis pellentesque erat. Nam finibus luctus pellentesque.
      Sed dignissim erat nunc, sit amet tempor tortor mollis ac. Integer
      vehicula risus ipsum, vel rhoncus tellus molestie eu. Sed malesuada
      hendrerit ipsum, sagittis euismod sapien bibendum quis. Maecenas sodales
      velit at mattis consectetur. Cras consectetur pellentesque nulla eget
      tempor. Fusce mauris leo, sagittis ac vestibulum non, placerat ac neque.
      Phasellus facilisis, sapien nec ultrices imperdiet, magna felis interdum
      mauris, ac tempor leo sapien sit amet lorem. Vestibulum vestibulum
      lobortis sollicitudin.
    </Paragraph>
    <Paragraph>
      Aliquam erat volutpat. Proin tincidunt tortor lorem, id bibendum mi
      sodales nec.
    </Paragraph>
  </Surface>
)
