package com.hust.sophia.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.hust.sophia.web.rest.TestUtil;

public class DmLapTopTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DmLapTop.class);
        DmLapTop dmLapTop1 = new DmLapTop();
        dmLapTop1.setId(1L);
        DmLapTop dmLapTop2 = new DmLapTop();
        dmLapTop2.setId(dmLapTop1.getId());
        assertThat(dmLapTop1).isEqualTo(dmLapTop2);
        dmLapTop2.setId(2L);
        assertThat(dmLapTop1).isNotEqualTo(dmLapTop2);
        dmLapTop1.setId(null);
        assertThat(dmLapTop1).isNotEqualTo(dmLapTop2);
    }
}
