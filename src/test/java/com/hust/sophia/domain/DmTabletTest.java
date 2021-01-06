package com.hust.sophia.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.hust.sophia.web.rest.TestUtil;

public class DmTabletTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DmTablet.class);
        DmTablet dmTablet1 = new DmTablet();
        dmTablet1.setId(1L);
        DmTablet dmTablet2 = new DmTablet();
        dmTablet2.setId(dmTablet1.getId());
        assertThat(dmTablet1).isEqualTo(dmTablet2);
        dmTablet2.setId(2L);
        assertThat(dmTablet1).isNotEqualTo(dmTablet2);
        dmTablet1.setId(null);
        assertThat(dmTablet1).isNotEqualTo(dmTablet2);
    }
}
